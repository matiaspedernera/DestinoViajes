import './NavBar.css'

const Categories = ({ categoryName }) => {
  return <button className="categoriesButton">{categoryName}</button>;
};

const NavBar = () => {
  return (
    <div className="buttonMenu">
      <Categories categoryName='Home' />
      <Categories categoryName='Destinos disponibles'/>
      <Categories categoryName='Sobre nosotros'/>
      <Categories categoryName='Mi perfil'/>
    </div>
  );
};

export default NavBar;
