import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Effectdemo from './components/useeffect';
import Ueffectbtn from './components/ueffectbtn';

const App=()=> {


 
  return (
    <div>
      
     

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>


       {/* <Effectdemo/> */}
       <Ueffectbtn/>
       
      
    </div>


   

  )
}

export default App;
