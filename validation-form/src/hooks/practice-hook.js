import { useReducer } from 'react'

const initialReducerState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            ...state, value: action.value
        }
    } else if (action.type === 'CLICK') {
        return {
            ...state, isTouched: true
        }
    }

    return inputStateReducer
}

const useInputPractice = (validateValue) => {
    const [inputState, dispatchFunction] = useReducer(inputStateReducer, initialReducerState)

    // const [enteredValue, setEnteredValue] = useState('')
    // const [isTouched, setIsTouched] = useState(false)

    const onChangeValueHandler = event => {
        dispatchFunction({ type: 'INPUT', value: event.target.value })
    }

    const onClickValueHandler = event => {
        dispatchFunction({ type: 'CLICK' })
    }

    const hasError = !validateValue(inputState.value) && inputState.isTouched

    return {
        enteredValue: inputState.value,
        hasError,
        onChangeValueHandler,
        onClickValueHandler
    }
}

export default useInputPractice