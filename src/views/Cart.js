import { useContext } from "react";
import CartContext from "../context/cartContext";
import "./cart.css";

const Cart = () => {
  const { viajes, limpiarCarrito, eliminarViaje } = useContext(CartContext);
  console.log(viajes)

  const eliminarCarrito = () => {
    limpiarCarrito();
  };

  const eliminarItem = (id) => {
    eliminarViaje(id);
  };

  return (
    <section className="carrito">
      <h4>Tu carrito</h4>
      {viajes.map((i) => (
        <div key={i.id} className="item-added">
          <p>{i.descripcion}</p>
          <p>Cantidad: {i.cantidad}</p>
          <p className="deleteButton" id={i.id} onClick={() => eliminarItem(i.id)}>
            X
          </p>
        </div>
      ))}
      <button className="myButton" onClick={eliminarCarrito}>
        Eliminar mi carrito
      </button>
    </section>
  );
};

export default Cart;
