import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = ({onClick}) => {
  const quantity = useSelector(state=>state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
