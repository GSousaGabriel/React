import { useState } from 'react'

const useInputError = () => {
    const [hasError, setHasError] = useState(false)
    const [error, setError] = useState('')


    const validate = (inputValue) => {
        if (typeof inputValue != 'string') {
            inputValue = inputValue.target.value
        }

        if (!inputValue.trim()) {
            setError("Field can't be empty!")
            setHasError(true)
        } else if (inputValue.trim().length < 5) {
            setError("Field value is too short!")
            setHasError(true)
        } else {
            setError('')
            setHasError(false)
        }
    }

    return {
        hasError,
        error,
        validate
    }
}

export default useInputError