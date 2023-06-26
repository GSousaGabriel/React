import { useEffect, useState } from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { value: enteredName, isValid: nameIsValid, hasError: nameHasError, valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler } = useInput(value=> value.trim()!=='')
  const { value: enteredEmail, isValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler } = useInput(value=> value.trim()!=='')

  const [formIsValid, setformIsValid] = useState(false)

  useEffect(() => {
    if (!nameHasError && nameIsValid && emailIsValid && !emailHasError) {
      setformIsValid(true)
    } else {
      setformIsValid(false)
    }
  }, [emailIsValid, nameIsValid, emailHasError, nameHasError])

  const formSubmissionHandler = event => {
    event.preventDefault()

    console.log(enteredName, enteredEmail)
  }

  const invalidValue = !nameIsValid ? "form-control invalid" : ""
  const invalidValueEmail = !emailIsValid ? "form-control invalid" : ""

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${invalidValue}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {!nameIsValid && <p style={{
          color: "red"
        }}>Name must not be empty</p>}
      </div>
      <div className={`form-control ${invalidValueEmail}`}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='email' onChange={emailChangeHandler} onClick={emailBlurHandler} />
        {!emailIsValid && <p style={{
          color: "red"
        }}>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type='submit' disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;