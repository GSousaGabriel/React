import { useEffect, useRef, useState } from 'react'

const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setenteredName] = useState('')
  const [isInvalidName, setisInvalidName] = useState(false)
  const [nameTouched, setNameTouched] = useState(false)

  const checkIsValidName= isInvalidName && nameTouched

  useEffect(() => {
    if (!checkIsValidName) {
      console.log('valid')
    }
  }, [checkIsValidName])

  const nameInputChangeHandler = event => {
    setenteredName(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    setNameTouched(true)
    
    if (!enteredName.trim() && !nameInputRef.current.value.trim()) {
      setisInvalidName(true)
    }

    console.log(enteredName)
    console.log(nameInputRef.current.value)
  }

  const invalidValue = checkIsValidName ? "form-control invalid" : ""

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${invalidValue}`}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} />
        {checkIsValidName && <p style={{
          color: "red"
        }}>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;