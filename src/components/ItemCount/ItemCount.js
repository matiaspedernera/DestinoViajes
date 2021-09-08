import React, { useState } from 'react'
import './itemCount.css';

const ItemCount = ({ stock, initial}) => {

    const [cantidad, setCantidad] = useState(initial)

    const reducir = () => {
        if (cantidad <= 0) {
            return
        }
        setCantidad(parseInt(cantidad) - 1)
    }

    const aumentar = () => {
        if (cantidad === stock) {
            return
        }
        setCantidad(parseInt(cantidad) + 1)
    }

    const onAdd = () => {
        if (stock === 0) {
            alert("No se puede comprar un producto sin stock")
            return
        }
        alert(`Has comprado ${cantidad} item/s`)
    }

    return (
        <div>
            <div>
                <button onClick={reducir}>-</button>
                <input type="number" value={cantidad} max={stock} min="0" placeholder={initial} readOnly/>
                <button onClick={aumentar}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;