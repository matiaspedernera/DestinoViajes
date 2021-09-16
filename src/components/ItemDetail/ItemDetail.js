import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, descripcion, precio, img, stock, minimo }) => {
  return (
    <div className="item-card" id={id}>
      <img src={img} alt={id} />
      <h4>{descripcion}</h4>
      <p>ARS ${precio}</p>
      <ItemCount stock={stock} initial={minimo} />
      <p>Stock disponible: {stock} viajes</p>
    </div>
  );
};

export default ItemDetail;
