import world from './world-min.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={world} className="App-logo" alt="logo" />
        <NavBar />
      </header>
    </div>
  );
}

export default App;
