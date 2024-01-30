import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { uiAction } from '../../store/ui-slice';

const MainHeader = (props) => {
  const dispatch = useDispatch()

  function handleShowCart(){
    dispatch(uiAction.showCart())
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleShowCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
