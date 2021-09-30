import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../context/cartContext";
import "./itemCount.css";

const ItemCount = ({ stock, initial, id, descripcion, precio }) => {
  const [cantidad, setCantidad] = useState(initial);
  const { agregarViaje } = useContext(CartContext);
  const reducir = () => {
    if (cantidad <= initial) {
      return;
    }
    setCantidad(parseInt(cantidad) - 1);
  };

  const aumentar = () => {
    if (cantidad === stock) {
      return;
    }
    setCantidad(parseInt(cantidad) + 1);
  };

  const agregarProducto = () => {
    agregarViaje({id, descripcion, cantidad,precio})
  }

  return (
    <div>
      <div>
        <button onClick={reducir}>-</button>
        <input
          type="number"
          value={cantidad}
          max={stock}
          min="0"
          placeholder={initial}
          readOnly
        />
        <button onClick={aumentar}>+</button>
      </div>
      <button onClick={agregarProducto}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
