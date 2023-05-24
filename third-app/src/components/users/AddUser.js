import { Fragment, useState, useRef } from 'react'

import Card from "../ui/Card"
import Button from "../ui/button/Button"
import classes from './AddUser.module.css'
import ErrorModal from '../ui/Modals/ErrorModal'
// import Wrapper from '../helpers/Wrapper'

const AddUser = props => {
    const nameInputRef= useRef()
    const ageInputRef= useRef()
    
    const [error, setError] = useState({canShow: false})

    const addUserHandler = event => {
        event.preventDefault()

        const name= nameInputRef.current.value
        const currentAge= ageInputRef.current.value

        if (currentAge < 1) {
            setError({
                canShow:true,
                title: "Incorrect age",
                message: "Please, insert an age older than 1"
            })
            return
        } else if (name.length < 3) {
            setError({
                canShow:true,
                title: "Name is too short",
                message: "Please, insert a name bigger than 3"
            })
            return
        }

        props.addNewUser({ name, currentAge, id: Math.random() * 100 })
        nameInputRef.current.value= ''
        ageInputRef.current.value= ''
    }

    const showErrorHandler= ()=>{
        setError({canShow:false})
    }

    return (
        <Fragment>
            {error.canShow && <ErrorModal title={error.title} message={error.message} hideError={showErrorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" ref={nameInputRef}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age" ref={ageInputRef}></input>
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser