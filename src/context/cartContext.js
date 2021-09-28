import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);

  const agregarViaje = (item) => {
    setViajes([...viajes, item]);
  };

  const eliminarViaje = (id) => {
    const viajesRestantes = viajes.filter(v => v.id !== id)
    setViajes(viajesRestantes)
  };

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
