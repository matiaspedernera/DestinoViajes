import "./cartWidget.css";
import cart from "../assets/shopping-cart.png";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../context/cartContext";

const CartWidget = () => {
  const { viajes } = useContext(CartContext);

  return (
    <>
      {viajes.length === 0 ? (
        <></>
      ) : (
        <button className="button-cart">
          <img className="shopping-cart" src={cart} alt="shopping cart"></img>
          <span>{viajes[0].cantidad}</span>
        </button>
      )}
    </>
  );
};

export default CartWidget;
