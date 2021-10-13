import world from "../../world-min.png";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Categories = ({ categoryName, url }) => {
  return (
    <button className="categoriesButton">
      <Link className="link" to={url}>
        {categoryName}
      </Link>
    </button>
  );
};

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  return (
    <header className="App-header">
      <Link className="link" to="/">
        <img src={world} className="App-logo" alt="logo" />
      </Link>
      <div className="buttonMenu">
        <Categories categoryName="Home" url="/" />
        <Categories categoryName="Sobre nosotros" url="/nosotros" />
        <Categories categoryName="Mi perfil" url="/miperfil" />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
