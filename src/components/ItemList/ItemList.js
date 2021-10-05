import { useEffect, useState } from "react";
import Brasil from "../assets/br.png";
import Argentina from "../assets/ar.png";
import Peru from "../assets/pe.png";
import Item from "../Item/Item";
import "./itemList.css";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const ItemList = () => {
  const [listaVuelos, setListaVuelos] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "viajes"))
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setListaVuelos(products);
      })
      .catch((error) => {
        console.log("Error searching intems", error);
      });
  },[]);

  if (listaVuelos.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <section>
      {listaVuelos.map((v) => (
        <Item key={v.id} id={v.id} nombre={v.nombre} bandera={v.bandera} />
      ))}
    </section>
  );
};

export default ItemList;
