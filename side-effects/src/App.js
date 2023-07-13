import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/notification';

let initial = true

function App() {
  const dispatch = useDispatch()
  const showCart = useSelector(cart => cart.cartReducer.showCart)
  const cart = useSelector((state) => state.cartReducer.items)
  const notification = useSelector((state) => state.notificationReducer.notification)

  useEffect(() => {
    if (initial) {
      initial = false
      return
    }
    
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
