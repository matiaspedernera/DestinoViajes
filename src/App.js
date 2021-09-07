import world from './world-min.png';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={world} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <ItemListContainer message="Mati"/>
    </div>
  );
}

export default App;
