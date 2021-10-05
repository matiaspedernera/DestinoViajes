import { useEffect, useState } from "react";
import Brasil from "../assets/brasil.jpg";
import Argentina from "../assets/argentina.jpg";
import Peru from "../assets/peru.jpg";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [viaje, setViaje] = useState(undefined);

  useEffect(() => {
    getDoc(doc(db, "detail-viajes", id))
      .then((querySnapshot) => {
        console.log({ id: querySnapshot.id, ...querySnapshot.data() });
        const item = { id: querySnapshot.id, ...querySnapshot.data() };
        setViaje(item);
      })
      .catch((error) => {
        console.log("Error searching intems", error);
      });

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
