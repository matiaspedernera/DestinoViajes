import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./views/Cart";
import { CartContextProvider } from "./context/cartContext";
import MiPerfil from "./views/Login";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/categoria/:idCategoria">
            <ItemListContainer />
          </Route>
          <Route path="/product/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/miperfil">
            <MiPerfil />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
