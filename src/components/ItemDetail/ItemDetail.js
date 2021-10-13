import { useState } from "react/cjs/react.development";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext";

const ItemDetail = ({ item }) => {
  const { user } = useContext(UserContext);
  const [itemCount, setItemCount] = useState(false);
  console.log(user);

  if (!item) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="item-detail-card" id={item.id}>
      <img src={item.imagen} alt={item.id} />
      <h4>{item.descripcion}</h4>
      {(user.name === "" || user.phone === "" || user.email === "") ? (
        <div>
          <p>Para agregar productos al carrito debes iniciar sesion primero!</p>
          <Link to="/miperfil">
            <button>Iniciar Sesión</button>
          </Link>
        </div>
        ) : (
          <>
          <p>ARS ${item.precio}</p>
          <ItemCount
            id={item.id}
            descripcion={item.descripcion}
            stock={item.stock}
            initial={item.minimo}
            precio={item.precio}
          />
          <Link to="/cart">
            <button>Finalizar mi compra</button>
          </Link>
          <p>Stock disponible: {item.stock} viajes</p>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
