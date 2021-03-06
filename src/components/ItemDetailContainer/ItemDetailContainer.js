import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [viaje, setViaje] = useState(undefined);

  useEffect(() => {
    getDoc(doc(db, "viajes", id))
      .then((querySnapshot) => {
        const item = { id: querySnapshot.id, ...querySnapshot.data() };
        setViaje(item);
      })
      .catch((error) => {});

    return () => {
      setViaje(undefined);
    };
  }, [id]);

  return (
    <section>
      <ItemDetail item={viaje} />
    </section>
  );
};

export default ItemDetailContainer;
