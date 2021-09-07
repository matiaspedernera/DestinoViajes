import "./CartWidget.css";
import cart from './img/shopping-cart.png'

const CartWidget = () => {
  return (
    <button className="button-cart">
      <img className="shopping-cart" src={cart} alt="shopping cart"></img>
    </button>
  );
};

export default CartWidget;
