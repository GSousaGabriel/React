import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function ErrorPage() {
    const navigate= useNavigate()
    const [timer, setTimer] = useState(3)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    if (timer === 0) {
        navigate("")
    }

    return (
        <main>
            <h1>Errors happen!</h1>
            <p>Going back to main page in: </p>
            <h2>{timer}</h2>
        </main>
    )
}

export default ErrorPage