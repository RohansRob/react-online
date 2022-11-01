import React, {Component} from 'react'
import logo from './logo.svg';
import User from './User';
import './App.css';

function App() {
  function apple()
  {
    alert("hi its clicked function called here");
  }
  return (
    <div className="App">
     <h1> JSX!</h1>
 
     <button onClick={apple}> Click Me </button>
    </div>
  );
}

export default App;
