import React, { useContext, useReducer, useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'user_input') {
    return { value: action.val, isValid: action.val.includes('@') }
  } else if (action.type === "input_blur") {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const passReducer = (state, action) => {
  if (action.type === 'pass_input') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  } else if (action.type === "pass_blur") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = (props) => {
  const ctx = useContext(AuthContext)

  const emailInputRef= useRef()
  const passInputRef= useRef()

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: '',
    isValid: null
  })

  // useEffect(() => {
  //   const identifier= setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => { 
  //     clearTimeout(identifier)
  //   }

  // }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'user_input', val: event.target.value });

    setFormIsValid(
      emailState.isValid && passState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: 'pass_input', val: event.target.value })

    setFormIsValid(
      emailState.isValid && passState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'input_blur' });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: 'pass_blur' });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(formIsValid){
      ctx.onLogin(emailState.value, passState);
    }else if(!emailState.isValid){
      emailInputRef.current.focus()
    }else{
      passInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" type="email" htmlFor="email" value={emailState.value} label="E-Mail"
          isValid={emailState.isValid} ref={emailInputRef}
          onChange={emailChangeHandler} onBlur={validateEmailHandler}></Input>
        <Input id="password" type="password" htmlFor="password" value={passState.value} label="Password"
          isValid={passState.isValid} ref={passInputRef}
          onChange={passwordChangeHandler} onBlur={validatePasswordHandler}></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
