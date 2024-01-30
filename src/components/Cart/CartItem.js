import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartAction } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
  const cartMember = useSelector(state=>state.cart.items)
  console.log(cartMember)
  const dispatch = useDispatch();
  const  handleIncrease = () =>{
    dispatch(cartAction.addItemToCart({
      id,
      title,
      price
    }))
  }
  const  handleDecrese = () =>{
    dispatch(cartAction.removeItem(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrese}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
