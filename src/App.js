import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import Product from "./views/Product";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer message="Mati" />
        </Route>
        <Route path="/item">
          <ItemList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
