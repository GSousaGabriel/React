import { Link, useParams } from "react-router-dom"


function ProductDetail(props) {
    const params = useParams()

    return (
        <>
            <h1>Details {params.prodId}</h1>
            <Link to='..' relative="path">Go back</Link>
        </>
    )
}

export default ProductDetail