import { useState } from 'react'

import Card from "../ui/Card"
import Button from "../ui/button/Button"
import classes from './AddUser.module.css'
import ErrorModal from '../ui/Modals/ErrorModal'

const AddUser = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState({})

    const addUserHandler = event => {
        event.preventDefault()

        if (age < 1) {
            setError({
                title: "Incorrect age",
                message: "Please, insert an age older than 1"
            })
            return
        } else if (username.length < 3) {
            setError({
                title: "Name is too short",
                message: "Please, insert a name bigger than 3"
            })
            return
        }

        props.addNewUser({ username, age, id: Math.random() * 100 })
        setUsername('')
        setAge('')
    }

    const showErrorHandler= ()=>{
        setError(false)
    }

    const usernameChangeHandler = event => {
        setUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setAge(event.target.value)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} hideError={showErrorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={usernameChangeHandler} value={username}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age" onChange={ageChangeHandler} value={age}></input>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser