import { useState } from "react/cjs/react.development";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [productAdded, setProductAdded] = useState(0);
  const [itemCount, setItemCount] = useState(false);

  if (!item) {
    return <h1>Cargando...</h1>;
  }

  const addProduct = (cantidadAgregada) => {
    console.log(cantidadAgregada);
    setItemCount(true);
    setProductAdded(cantidadAgregada);
  };

  return (
    <div className="item-detail-card" id={item.id}>
      <img src={item.img} alt={item.id} />
      <h4>{item.descripcion}</h4>
      <p>ARS ${item.precio}</p>
      {itemCount ? (
        <div></div>
      ) : (
        <ItemCount
          id={item.id}
          descripcion={item.descripcion}
          stock={item.stock}
          initial={item.minimo}
          precio={item.precio}
        />
      )}
      <Link to="/cart">
        <button>Finalizar mi compra</button>
      </Link>
      <p>Stock disponible: {item.stock} viajes</p>
    </div>
  );
};

export default ItemDetail;
