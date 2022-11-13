
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListExample from './components/nav';
import KitchenSinkExample from './components/body'; 
import Abuelo from './components/Abuelo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <ListExample />
        <KitchenSinkExample />
        <Abuelo />
      
          La hora actual es: {new Date().toLocaleTimeString()}



      </header>
    </div>
  
  
  );
 

}


export default App;
