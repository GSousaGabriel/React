import classes from './Header.module.css'
import mealsImage from '../../assests/meals.jpg'

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>Available meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Background food"></img>
            </div>
        </>
    )
}

export default Header