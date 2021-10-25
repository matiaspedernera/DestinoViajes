import world from "../../world-min.png";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
const Categories = ({ categoryName, url }) => {
  return (
    <NavLink className="categoriesButton" to={url}>
      {categoryName}
    </NavLink>
  );
};

const NavBar = () => {
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    getDocs(collection(db, "categorias"))
      .then((querySnapshot) => {
        const categorias = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setCategorias(categorias);
      })
      .catch((error) => {});
  });

  return (
    <header className="App-header">
      <Link className="link" to="/">
        <img src={world} className="App-logo" alt="logo" />
      </Link>
      <div className="buttonMenu">
        <Categories categoryName="Home" url="/" />
        {categorias?.map((cat) => (
          <Categories
            categoryName={cat.descripcion}
            key={cat.id}
            url={`/categoria/${cat.id}`}
          />
        ))}
        <Categories categoryName="Mi perfil" url="/miperfil" />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
