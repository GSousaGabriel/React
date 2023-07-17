import { Link } from "react-router-dom"

function ProductsPage() {
    const dummy_prods=[
        {id:'p1', title:'product 1'},
        {id:'p2', title:'product 2'},
        {id:'p3', title:'product 3'}
    ]

    return (
        <>
            <h1>Prods page</h1>
            <ul>
                {dummy_prods.map((prod)=><li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.title}</Link></li>)}
            </ul>
        </>
    )
}

export default ProductsPage