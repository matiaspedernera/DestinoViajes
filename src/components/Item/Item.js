//import ItemCount from "../ItemCount/ItemCount";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, bandera }) => {
  return (
    <Link className="item-link" to={`/product/${id}`}>
      <div className="item-card" id={id}>
        <h3>{nombre}</h3>
        <img className="item-bandera" src={bandera} alt={nombre}/>
      </div>
    </Link>
  );
};

export default Item;
