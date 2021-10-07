import { useContext } from "react";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import CartContext from "../context/cartContext";
import "./cart.css";
import { Link } from "react-router-dom";
import { db } from "../services/firebase/firebase";

const Cart = () => {
  const { viajes, limpiarCarrito, eliminarViaje } = useContext(CartContext);
  console.log(viajes);

  const eliminarCarrito = () => {
    limpiarCarrito();
  };

  const eliminarItem = (id) => {
    eliminarViaje(id);
  };

  const finalizarCompra = () => {
    const carritoFinal = {
      buyer: {
        name: "Mati",
        phone: "351-2223334",
        email: "mati.peder@matipeder.com",
      },
      items: viajes,
      date: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const sinStock = [];

    carritoFinal.items.forEach((prod, i) => {
      getDoc(doc(db, "viajes", prod.id)).then((DocumentSnapshot) => {
        if (DocumentSnapshot.data().stock >= carritoFinal.items[i].cantidad) {
          batch.update(doc(db, "viajes", DocumentSnapshot.id), {
            stock: DocumentSnapshot.data().stock - carritoFinal.items[i].cantidad,
          });
        } else {
          sinStock.push({
            ...DocumentSnapshot.data(),
            id: DocumentSnapshot.id,
          });
        }
      });
    });

    if (sinStock.length === 0) {
      addDoc(collection(db, "ordenes"), carritoFinal)
        .then(() => {
          batch.commit().then(() => {
            console.log("Se finalizó la compra")
          });
        })
        .catch((error) => {
          console.log("Error al finalizar la compra");
        })
        .finally(() => {
          limpiarCarrito();
        });
    }
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
          <button className="myButton" onClick={finalizarCompra}>
            Finalizar la compra
          </button>
        </section>
      )}
    </>
  );
};

export default Cart;
