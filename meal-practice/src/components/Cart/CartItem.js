import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const onClickAdd = () => {
    props.onAdd({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price
    })
  }

  const onClickRemove = () => {
    props.onRemove(props.id)
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onClickRemove}>−</button>
        <button onClick={onClickAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
