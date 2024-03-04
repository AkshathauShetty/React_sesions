import logo from './logo.svg';
import './App.css';
import Layout from './components/hooksast/Navigate';
import Theme from './components/hooksast/Theme';
import Formvalidation from './components/hooksast/Formvalidatation';
import Optimize from './components/hooksast/Optimize';
import Calculator from './components/hooksast/Memoization';
import Displayfetch from './components/hooksast/Displayfetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Theme/>} />
                <Route path="form" element={ <Formvalidation/>}/>
                <Route path="useCb" element={ <Optimize 
              data={
                ["car","bike","ship","planes"] 
              } /> }/>

                <Route path="calcy" element={<Calculator />} />
                <Route path="useEffct" element={<Displayfetch/>}/>
              </Route>
            </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
