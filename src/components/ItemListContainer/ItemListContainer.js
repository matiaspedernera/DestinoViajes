import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [listaVuelos, setListaVuelos] = useState([]);
  const { idCategoria } = useParams()

  useEffect(() => {
    if(!idCategoria) {
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
    } else {
      getDocs(query(collection(db, 'viajes'), where('categoria', '==', idCategoria))).then((querySnapshot) => {
        const products = querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        }) 
        setListaVuelos(products)
      })
      .catch((error) => {
        console.log("Error searching intems", error);
      });
    }
  }, [idCategoria]);

  return (
    <div>
      <ItemList vuelos={listaVuelos}/>
    </div>
  );
};

export default ItemListContainer;
