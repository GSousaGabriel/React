import { cartActions } from '../../store/cart';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, price, description } = props;

  const addItem = () => {
    const item = {
      id,
      title,
      price
    }

    dispatch(cartActions.addItem(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
