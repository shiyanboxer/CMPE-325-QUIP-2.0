import React from "react"
import { NewHome } from './components/NewHome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style/App.css';
// import PrimarySearchAppBar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {/* <PrimarySearchAppBar/> */}
          <Routes></Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
