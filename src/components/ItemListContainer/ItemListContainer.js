import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ message }) => {
  return (
    <div>
      <h1>
        Buenas {message}, aquí veras pronto la lista de productos disponibles
      </h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
