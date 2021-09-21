import { useEffect, useState } from "react";
import Brasil from "../components/assets/brasil.jpg";
import Argentina from "../components/assets/argentina.jpg";
import Peru from "../components/assets/peru.jpg";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const getViaje = () => {
  return new Promise((resolve, reject) => {
    const viajes = [
      {
        id: "1",
        descripcion: "Viaje a Brasil para 2 o 3 personas",
        precio: 30000,
        img: Brasil,
        stock: 5,
        minimo: "2",
      },
      {
        id: "2",
        descripcion: "Viaje a Argentina para 1 o 2 personas",
        precio: 15000,
        img: Argentina,
        stock: 8,
        minimo: "1",
      },
      {
        id: "3",
        descripcion: "Viaje a Perú para 3 o 4 personas",
        precio: 80000,
        img: Peru,
        stock: 6,
        minimo: "3",
      },
    ];
    setTimeout(() => resolve(viajes), 2000);
  });
};

const Product = () => {
  const { id } = useParams();
  const [viaje, setViaje] = useState(undefined);

  useEffect(() => {
    const listViajes = getViaje();
    listViajes.then((result) => {
      const viaje = result.find((destino) => destino.id === id);
      setViaje(viaje);
    });

    return () => {
      setViaje(undefined);
    };
  }, [id]);

  return (
    <section>
      <ItemDetail
        item={viaje}
      />
    </section>
  );
};

export default Product;
