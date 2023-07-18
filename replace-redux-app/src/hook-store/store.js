import { useState, useEffect } from 'react'

let globalState = {}
let listeners = []
let actions = {}

const useStore = () => {
    const setState = useState(globalState)[1]

    const dispach = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        globalState = { ...globalState, newState }

        for (const listener of listeners) {
            listener(globalState)
        }
    }

    useEffect(() => {
        listeners.push(setState)
        return () => {
            listeners = listeners.filter(li => li !== setState)
        }
    }, [setState])

    return [globalState, dispach]
}

const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState }
    }

    actions = { ...actions, ...userActions }
}

export default useStore
export { initStore }