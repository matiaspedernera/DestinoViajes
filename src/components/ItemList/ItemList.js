import { useEffect, useState } from "react";
import Brasil from "../assets/br.png";
import Argentina from "../assets/ar.png";
import Peru from "../assets/pe.png";
import Item from "../Item/Item";
import "./itemList.css";

const vuelos = [
  {
    id: 1,
    nombre: "Brasil: Río de Janeiro",
    descripcion: "Viaje a Brasil para 2 o 3 personas",
    precio: 30000,
    bandera: Brasil,
  },
  {
    id: 2,
    nombre: "Argentina: Cataratas del Iguazú",
    descripcion: "Viaje a Argentina para 1 o 2 personas",
    precio: 15000,
    bandera: Argentina,
  },
  {
    id: 3,
    nombre: "Perú: Machu Pichu",
    descripcion: "Viaje a Perú para 3 o 4 personas",
    precio: 80000,
    bandera: Peru,
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

  if (listaVuelos.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <section>
      {listaVuelos.map((v) => (
        <Item
          key={v.id}
          id={v.id}
          nombre={v.nombre}
          bandera={v.bandera}
        />
      ))}
    </section>
  );
};

export default ItemList;
