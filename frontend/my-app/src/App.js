import logo from './logo.svg';
import './style/App.css';
import React from "react"
// import axios from "axios";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Home />
        </div>       
      </header>
    </div>
  );
}

export default App;
