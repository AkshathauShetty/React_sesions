import logo from './logo.svg';
import './App.css';
import Timer from './components/level1/timer';
import Timertwo from './components/level2/timertwo';
import Timerthree from './components/level3/timerthree';
import Timerfour from './components/level4/timerfour';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Timerfour/>} />
          <Route path="l1" element={<Timer />}/>
          <Route path="l2" element={<Timertwo />}/>
          <Route path="l3" element={<Timerthree />}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
