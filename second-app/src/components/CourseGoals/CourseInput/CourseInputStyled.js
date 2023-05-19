import { useState } from "react"
import './CourseInput.css'
import Button from "../../UI/Button/Button"
import styled from "styled-components"

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props=>(props.invalid ? 'red' : 'black')}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props=>(props.invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`

const CourseInput = props => {
  const [goalValue, setGoalValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const onChangeHandler = event => {
    if (goalValue.trim().length > 0) {
      setIsValid(true)
    }
    setGoalValue(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()

    if (goalValue.trim().length === 0) {
      setIsValid(false)
      return
    }

    props.addNewCourse(goalValue)
    setGoalValue('')
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isValid}> {/*className={ !isValid && "invalid"}>*/}
        <label>Course Goal</label>
        <input type="text" id="courseGoal" name="courseGoal" onChange={onChangeHandler} value={goalValue}></input>
      </FormControl>
      <Button type={'submit'}>Add goal</Button>
    </form>
  )
}

export default CourseInput