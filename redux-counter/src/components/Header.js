import classes from './Header.module.css';
import { authActions } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(isAuth => isAuth.authReducer.isAuth)

  const onClickHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onClickHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;