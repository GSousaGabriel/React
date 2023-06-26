import { useEffect, useState } from 'react'
import useInputPractice from '../hooks/practice-hook';

const BasicForm = (props) => {
  const {
    enteredValue: nameValue,
    hasError: nameHasError,
    onChangeValueHandler: nameChangeHandler,
    onClickValueHandler: nameClickHandler
  } = useInputPractice(value => value !== '')

  const {
    enteredValue: lastNameValue,
    hasError: lastNameHasError,
    onChangeValueHandler: lastNameChangeHandler,
    onClickValueHandler: lastNameClickHandler
  } = useInputPractice(value => value !== '')

  const {
    enteredValue: emailValue,
    hasError: emailHasError,
    onChangeValueHandler: emailChangeHandler,
    onClickValueHandler: emailClickHandler
  } = useInputPractice(value => value !== '')

  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    if (!emailHasError && !lastNameHasError && !nameHasError) {
      setFormIsValid(true)
    }else{
      setFormIsValid(false)
    }
  }, [emailHasError, lastNameHasError, nameHasError])

  const invalidName = nameHasError ? "form-control invalid" : ""
  const invalidLastName = lastNameHasError ? "form-control invalid" : ""
  const invalidEmail = emailHasError ? "form-control invalid" : ""

  return (
    <form>
      <div className='control-group'>
        <div className={`form-control ${invalidName}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={nameValue} onClick={nameClickHandler} onChange={nameChangeHandler} />
          {nameHasError && <p style={{
            color: "red"
          }}>Name must not be empty</p>}
        </div>
        <div className={`form-control ${invalidLastName}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={lastNameValue} onClick={lastNameClickHandler} onChange={lastNameChangeHandler} />
          {lastNameHasError && <p style={{
            color: "red"
          }}>Last name must not be empty</p>}
        </div>
      </div>
      <div className={`form-control ${invalidEmail}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={emailValue} onClick={emailClickHandler} onChange={emailChangeHandler} />
        {emailHasError && <p style={{
          color: "red"
        }}>Email must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;