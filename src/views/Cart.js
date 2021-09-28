import { useContext } from "react";
import CartContext from "../context/cartContext";

const Cart = () => {
    console.log(useContext(CartContext))
    return (
        <h1>Mi carrito</h1>
    )
}

export default Cart;