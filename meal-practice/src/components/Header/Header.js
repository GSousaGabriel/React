import classes from './Header.module.css'
import mealsImage from '../../assests/meals.jpg'
import { useContext } from 'react'
import CartContext from '../../store/cart-contex'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    const ctx= useContext(CartContext)
    const cartItemQtd= ctx.items.length

    return (
        <>
            <header className={classes.header}>
                <h1>Available meals</h1>
                <HeaderCartButton onClick={props.canShowCart} qtdItems={cartItemQtd}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Background food"></img>
            </div>
        </>
    )
}

export default Header