//import ItemCount from "../ItemCount/ItemCount";
import './item.css'

const Item = ({ id, nombre, descripcion, precio, img }) => {
  return (
    <div className="item-card" id={id}>
      <h3>{nombre}</h3>
      {/* <img src={img} alt={nombre} />
      <h4>{descripcion}</h4>
      <p>ARS ${precio}</p>
      <ItemCount stock={3} initial="2" /> */}
    </div>
  );
};

export default Item;
