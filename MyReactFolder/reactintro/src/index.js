import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Compute, { Counting, CountingProp } from './functions';
import { Profile } from './functionsprops';
import Spreadfunc from './functionspread';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  <Compute val={2} />
  <Compute val={2} />

  <Counting/>
  <Counting/>

 <CountingProp values={4}/>
 <CountingProp values={5}/>
 <CountingProp values={4}/>

 <Profile/>

 <Spreadfunc 
  PI={
  {  name:'bil',
      age: 30
  }}
  interest='drawing'
  country='India'
  />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
