import { useEffect, useState } from "react";
import Brasil from "../assets/brasil.jpg";
import Argentina from "../assets/argentina.jpg";
import Peru from "../assets/peru.jpg";
import Item from "../Item/Item";
import "./itemList.css";

const vuelos = [
  {
    id: 1,
    nombre: "Brasil: Río de Janeiro",
    descripcion: "Viaje a Brasil para 2 o 3 personas",
    precio: 30000,
    img: Brasil,
  },
  {
    id: 2,
    nombre: "Argentina: Cataratas del Iguazú",
    descripcion: "Viaje a Argentina para 1 o 2 personas",
    precio: 15000,
    img: Argentina,
  },
  {
    id: 3,
    nombre: "Perú: Machu Pichu",
    descripcion: "Viaje a Perú para 3 o 4 personas",
    precio: 80000,
    img: Peru,
  },
];

const llamadoLista = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(vuelos), 2000);
  });
};

const ItemList = () => {
  const [listaVuelos, setListaVuelos] = useState([]);

  useEffect(() => {
    const lista = llamadoLista();
    lista.then((lista) => {
      setListaVuelos(lista);
    });
  });

  return (
    <section>
      {listaVuelos.map((v) => (
        <Item
          id={v.id}
          nombre={v.nombre}
          descripcion={v.descripcion}
          precio={v.precio}
          img={v.img}
        />
      ))}
    </section>
  );
};

export default ItemList;
