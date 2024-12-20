import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
function App() {
  const [cart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
