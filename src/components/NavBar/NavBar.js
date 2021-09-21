import world from "../../world-min.png";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Categories = ({ categoryName, url }) => {
  return (
    <button className="categoriesButton">
      <Link className="link" to={url}>{categoryName}</Link>
    </button>
  );
};

const NavBar = () => {
  return (
    <header className="App-header">
      <img src={world} className="App-logo" alt="logo" />
      <div className="buttonMenu">
        <Categories categoryName="Home" url="/" />
        <Categories categoryName="Destinos disponibles" url="/item" />
        <Categories categoryName="Sobre nosotros" url="/nosotros" />
        <Categories categoryName="Mi perfil" url="/perfil" />
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
