import { cartActions } from '../../store/cart';
import { useDispatch, useSelector } from 'react-redux'
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const items= useSelector(cart=>cart.cartReducer.items)
  const dispatch= useDispatch()

  const onClickHandler= ()=>{
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
