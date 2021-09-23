import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./itemCount.css";

const ItemCount = ({ onAddedProduct, stock, initial }) => {
  const [cantidad, setCantidad] = useState(initial);

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
        <button onClick={() => onAddedProduct(cantidad)}>
          Agregar al carrito
        </button>
      <Link to="/cart">
        <button>
          Finalizar mi compra
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;
