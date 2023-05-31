import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider'

function App() {
  const [showCart, setShowCart]= useState(false)

  const showCartHandler=()=>{
    setShowCart(!showCart)
  }

  return (
    <CartProvider>
    {showCart && <Cart canShowCart={showCartHandler}/>}
      <Header canShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
