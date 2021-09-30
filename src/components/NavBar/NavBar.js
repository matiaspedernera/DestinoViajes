import world from "../../world-min.png";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

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
  return (
    <header className="App-header">
      <Link className="link" to="/">
        <img src={world} className="App-logo" alt="logo" />
      </Link>
      <div className="buttonMenu">
        <Categories categoryName="Home" url="/" />
        <Categories categoryName="Sobre nosotros" url="/nosotros" />
        <Categories categoryName="Mi perfil" url="/perfil" />
        <Categories categoryName="Brasil" url="/product/1" />
        <Categories categoryName="Argentina" url="/product/2" />
        <Categories categoryName="Perú" url="/product/3" />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
