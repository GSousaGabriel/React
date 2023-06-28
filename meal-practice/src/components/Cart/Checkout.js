import { useEffect, useRef, useState } from 'react';
import classes from './Checkout.module.css';
import useInputError from '../../hooks/use-input-error';

const Checkout = (props) => {
  const [canConfirmOrder, setCanConfirmOrder] = useState(false)
  const [canSend, setCanSend] = useState(false)
  const nameInputValue = useRef()
  const streetInputValue = useRef()
  const postalInputValue = useRef()
  const cityInputValue = useRef()

  const {
    hasError: nameHasError,
    error: nameError,
    validate: nameErrorHandler } = useInputError()
  const {
    hasError: streetHasError,
    error: streetError,
    validate: streetErrorHandler } = useInputError()
  const {
    hasError: postalHasError,
    error: postalError,
    validate: postalErrorHandler } = useInputError()
  const {
    hasError: cityHasError,
    error: cityError,
    validate: cityErrorHandler } = useInputError()

  const onClickFieldHandler = () => {
    if ((nameInputValue.current.value && streetInputValue.current.value && postalInputValue.current.value && cityInputValue.current.value)) {
      setCanSend(true)
    }
  }

  useEffect(() => {
    if (!nameHasError && !streetHasError && !postalHasError && !cityHasError && canSend) {
      setCanConfirmOrder(true)
    } else {
      setCanConfirmOrder(false)
    }
  }, [canSend, cityHasError, nameHasError, postalHasError, streetHasError])

  const confirmHandler = (event) => {
    event.preventDefault();

    props.onSubmit({
      name: nameInputValue.current.value,
      street: streetInputValue.current.value,
      postal: postalInputValue.current.value,
      city: cityInputValue.current.value
    })
  };

  const nameClass = nameHasError ? classes.control + " " + classes.error : classes.control
  const streetClass = streetHasError ? classes.control + " " + classes.error : classes.control
  const postalClass = postalHasError ? classes.control + " " + classes.error : classes.control
  const cityClass = cityHasError ? classes.control + " " + classes.error : classes.control

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputValue} onBlur={nameErrorHandler.bind(this)} onChange={onClickFieldHandler} />
        {nameHasError && <p>{nameError}</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputValue} onBlur={streetErrorHandler.bind(this)} onChange={onClickFieldHandler} />
        {streetHasError && <p>{streetError}</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputValue} onBlur={postalErrorHandler.bind(this)} onChange={onClickFieldHandler} />
        {postalHasError && <p>{postalError}</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputValue} onBlur={cityErrorHandler.bind(this)} onChange={onClickFieldHandler} />
        {cityHasError && <p>{cityError}</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!canConfirmOrder}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;