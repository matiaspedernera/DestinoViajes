import ItemCount from "../ItemCount/ItemCount";
import './itemDetail.css'

const ItemDetail = ({ item }) => {
  if (!item) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="item-detail-card" id={item.id}>
      <img src={item.img} alt={item.id} />
      <h4>{item.descripcion}</h4>
      <p>ARS ${item.precio}</p>
      <ItemCount stock={item.stock} initial={item.minimo} />
      <p>Stock disponible: {item.stock} viajes</p>
    </div>
  );
};

export default ItemDetail;
