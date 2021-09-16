import { useEffect, useState } from "react";
import Brasil from "../assets/brasil.jpg";
import Argentina from "../assets/argentina.jpg";
import Peru from "../assets/peru.jpg";
import ItemDetail from "../ItemDetail/ItemDetail";

const detallesVuelos = [
  {
    id: 1,
    descripcion: "Viaje a Brasil para 2 o 3 personas",
    precio: 30000,
    img: Brasil,
    stock: 5,
    minimo: "2"
  },
  {
    id: 2,
    descripcion: "Viaje a Argentina para 1 o 2 personas",
    precio: 15000,
    img: Argentina,
    stock: 8,
    minimo: "1"
  },
  {
    id: 3,
    descripcion: "Viaje a Perú para 3 o 4 personas",
    precio: 80000,
    img: Peru,
    stock: 6,
    minimo: "3"
  },
];

const llamadoDetalles = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(detallesVuelos), 2000);
  });
};

const ItemDetailContainer = () => {
  const [listaDetalles, setListaDetalles] = useState([]);

  useEffect(() => {
    const lista = llamadoDetalles();
    lista.then((lista) => {
      setListaDetalles(lista);
    });
  });

  return (
    <section>
      {listaDetalles.map((v) => (
        <ItemDetail
          id={v.id}
          descripcion={v.descripcion}
          precio={v.precio}
          img={v.img}
          stock={v.stock}
          minimo={v.minimo}
        />
      ))}
    </section>
  );
};

export default ItemDetailContainer;
