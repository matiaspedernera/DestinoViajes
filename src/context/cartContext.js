import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);

  const agregarViaje = (item, cantidad) => {
    setViajes([...item]);
  };

  const eliminarViaje = (id) => {};

  const limpiarCarrito = () => {
    setViajes([]);
  };

  return (
    <CartContext.Provider
      value={{ viajes, agregarViaje, eliminarViaje, limpiarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
