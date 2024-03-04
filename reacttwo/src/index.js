import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logincontrolclass from './components/LoginControl';
import Hooktwo from './components/hooktwo';
import Formitem from './components/forms';
import ReducerDemo from './components/reducer';
import Shopping from './components/shoppingcart';
import Shop from './components/shopcart';
import Shopcarts from './components/shopcarts';
import Shopcartfinal from './components/shopcartFinal';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Logincontrolclass/>
    <Hooktwo/>
    <App />
    <Formitem/> */}
    {/* <Shopping/> */}

    {/* <Ueffectbtn/> */}
   


    {/* <Shop/> */}
    {/* <Shopcarts/> */}
    {/* <Shopcartfinal/> */}
    <App/>
  

   {/* <ReducerDemo/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



