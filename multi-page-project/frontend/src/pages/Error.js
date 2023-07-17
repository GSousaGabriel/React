import { useEffect, useState } from "react"
import { useNavigate, useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"

function ErrorPage() {
    const error = useRouteError()
    let title = "Error Found"
    let message = "Fix before continuing"

    if (error.status === 500) {
        title = "Server error"
        message = "Contact the adm"
    } else if (error.status === 404) {
        title = "Not found!"
        message = error.error.message
    }

    const navigate = useNavigate()
    const [timer, setTimer] = useState(3)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

    if (timer === 0) {
        navigate("/")
    }

    return (
        <PageContent title={title}>
            <main>
                <h3>{message}</h3>
                <p>Going back to main page in: </p>
                <h2>{timer}</h2>
            </main>
        </PageContent>
    )
}

export default ErrorPage