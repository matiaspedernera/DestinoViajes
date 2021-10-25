
import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({vuelos}) => {
  

  if (vuelos.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <section>
      {vuelos.map((v) => (
        <Item key={v.id} id={v.id} nombre={v.nombre} bandera={v.bandera} />
      ))}
    </section>
  );
};

export default ItemList;
