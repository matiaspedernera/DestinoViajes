import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ message }) => {
  return (
    <div>
      <h1>
        Buenas {message}, aquí veras pronto la lista de productos disponibles
      </h1>
      <ItemCount stock={3} initial="1"/>
    </div>
  );
};

export default ItemListContainer;
