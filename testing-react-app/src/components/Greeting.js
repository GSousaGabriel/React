import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    const changedTextHandler = () => {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <Output>This is a hello to you</Output>}
            {changedText && <p>Showing text.</p>}
            <button onClick={changedTextHandler}>Change text!</button>
        </div>
    )
}


export default Greeting