import "./App.css";
import Cart from "./components/cart/Cart";
import TShirtForm from "./components/Form/TShirtForm";
import Header from "./components/Header/Header";
import Tshirts from "./components/TShirts/TShirts";
import CartProvider from "./store/CartProvider";
import TShirtProvider from "./store/TShirtProvider";

function App() {
  return (
    <CartProvider>
    <TShirtProvider>
      <Header />
      <TShirtForm />
      <Tshirts />
      <Cart/>
    </TShirtProvider>
    </CartProvider>
  );
}

export default App;
