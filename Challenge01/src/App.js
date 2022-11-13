
import './App.css';
import HolaMundo from './hellowWorld/HolaMundo';
import Inicio from './Inicio';
import Sumar from './Sumar';

const User = ['John Doe id:1', 'Jane Doe id:2','Billy Doe id:3']

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Inicio />
      
      {
        User.map(elemento =>(
          <p>{elemento}</p>
        ))
      }
      <Sumar />
      <HolaMundo />
      </header>
    </div>
  );
}




export default App;
