import { Link } from "react-router-dom"


function HomePage(){
    return (
    <>
    <h1>My home Page</h1>
    <p>
        Go to <Link to="/products">products list</Link>
    </p>
    </>
    )
}

export default HomePage