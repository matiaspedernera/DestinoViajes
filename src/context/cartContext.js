import { createContext, useState } from "react";

const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [viajes, setViajes] = useState([]);

  const agregarViaje = (item) => {
    item.precio = item.precio * item.cantidad;
    const viajeEnCarrito = viajes.find((v) => v.id === item.id);
    if (viajeEnCarrito) {
      const viajesPrevios = viajes.map((vi) => {
        if (vi.id === viajeEnCarrito.id) {
          vi.cantidad = parseInt(vi.cantidad) + item.cantidad;
          vi.precio = vi.precio + item.precio;
        }
        return vi;
      });
      setViajes([...viajesPrevios]);
    } else {
      setViajes([...viajes, item]);
    }
  };

  const eliminarViaje = (id) => {
    const viajesRestantes = viajes.filter((v) => v.id !== id);
    setViajes(viajesRestantes);
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
