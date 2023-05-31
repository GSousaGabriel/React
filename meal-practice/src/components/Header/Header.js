import classes from './Header.module.css'
import mealsImage from '../../assests/meals.jpg'
import Button from '../UI/Button/Button'
import CartIcon from '../UI/icons/CartIcon'

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>Available meals</h1>
                <Button className={classes.button} onClick={props.canShowCart}>
                    <span className={classes.icon}><CartIcon/></span>
                    <span>Your Cart</span>
                    <span className={classes.quantityItens}>3</span>
                </Button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Background food"></img>
            </div>
        </>
    )
}

export default Header