import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer)
  const notification = useSelector((state) => state.notificationReducer.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData({items: cart.items, cartId: cart.cartId}))
    }
  }, [cart, dispatch])

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cart.showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
