
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div className="App container mt-5">
      <Hello nombre="Luis" clase="React JS" horario="noche" />
      <ItemListContainer />
    </div>
  );
}

export default App;
