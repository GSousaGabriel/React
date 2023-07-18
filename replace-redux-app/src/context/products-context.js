import { useState } from "react";
import { createContext } from "react";


const ProductsContext = createContext({
    products: [],
    toggleFavorite: ()=>{}
})

const ProductsProvider = (props) => {
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ])

    const toggleFavorite = (id)=>{
        setProductsList(prevList=>{
            const markedIndex= prevList.findIndex(prod=>prod.id===id)
            const updList= [...prevList]
            updList[markedIndex].isFavorite= !prevList[markedIndex].isFavorite
            return updList
        })
    }

    return (
        <ProductsContext.Provider value={{ products: productsList, toggleFavorite }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider
export { ProductsContext }