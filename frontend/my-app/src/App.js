import React from "react"
import { NewHome } from './components/NewHome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style/App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        {/* <Navbar/> */}
        <NewHome></NewHome>
      </div>
    </div>
  );
}

export default App;
