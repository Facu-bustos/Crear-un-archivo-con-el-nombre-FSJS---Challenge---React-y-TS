import React from 'react'
import './App.css';

function Auto (props){
  return <h1>Hola soy un auto, {props.soy}</h1>
}

class Cars extends React.Component{
  render (){
    return <h2>Soy un bmw, {this.props.soy}</h2>
  }
}

function Car() {
  return <h2>Soy un Auto</h2>;
}

function Garage() {
  return (
    <>
      <h1>Quién sos vos?</h1>
      <Car />
    </>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Auto soy="Soy un auto rojo"/>
      <Cars soy="Soy un bmw rojo"/>
      <Garage />

      </header>
    </div>
  );
}

export default App;
