import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = ({ message }) => {
  return (
    <div>
      <h1>
        Buenas {message}, aquí veras pronto la lista de productos disponibles
      </h1>
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
