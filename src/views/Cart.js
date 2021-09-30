import { useContext } from "react";
import CartContext from "../context/cartContext";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { viajes, limpiarCarrito, eliminarViaje } = useContext(CartContext);
  console.log(viajes);

  const eliminarCarrito = () => {
    limpiarCarrito();
  };

  const eliminarItem = (id) => {
    eliminarViaje(id);
  };

  return (
    <>
      {viajes.length === 0 ? (
        <div className="carrito-vacio">
          <h2>Todavía no hay items en tu carrito!</h2>
          <Link to="/">
          <button className="back-to-menu">Ver productos disponibles</button>
          </Link>
        </div>
      ) : (
        <section className="carrito">
          <h4>Tu carrito</h4>
          {viajes.map((i) => (
            <div key={i.id} className="item-added">
              <p>{i.descripcion}</p>
              <p>Cantidad de pasajes: {i.cantidad}</p>
              <p>Precio total: ${i.precio}</p>
              <p
                className="deleteButton"
                id={i.id}
                onClick={() => eliminarItem(i.id)}
              >
                X
              </p>
            </div>
          ))}
          {/* <h5>Precio total:</h5> */}
          <button className="myButton" onClick={eliminarCarrito}>
            Eliminar mi carrito
          </button>
        </section>
      )}
    </>
  );
};

export default Cart;
