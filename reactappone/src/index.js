import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome, { Welcomeprop, Welcomevar } from './components/Welcome';
import Welclass, { WelclassState } from './components/Welclass';
import { LoginButton } from './components/Buttons';
import Logincontrolclass from './components/Logincontrol';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

        {/* 
            <Welcome/>

            <Welcomevar
            name="akshatha"
            /> */}

          {/* <Welcomeprop 
          info={
                  {
                    name:'akshatha',
                    age:'22'
                  }
                }

          /> */}

          {/* <Welclass/>

          <WelclassState/> */}

          {/* <Logincontrolclass/> */}

            {/* <div> hii hello</div> */}

  </React.StrictMode>
);


{/* <Spreadfunc 
PI={
{  name:'bil',
    age: 30
}}
interest='drawing'
country='India'
/> */}

// const directFun=()=>{
//   const renderThis = (
//     <div>
//       <h1> rendering this directly ... { new Date().toString } </h1>
//     </div>
//   )
//   root.render(renderThis)
// }

// setInterval(directFun,2000)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


