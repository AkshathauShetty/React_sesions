import logo from './logo.svg';
import './App.css';
import Styledemo from './components/inlinestyledemos';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './pages/Counter'
import Greeting from './pages/Greeting'
import TemperatureConverter from './pages/temperatureconverter'
import UserStatus from './pages/UserStatus';
import Layout from './pages/Navigate';
import WedStyle from './wedstyles/wedstyl1';
import Layout2 from './pagesClass/navigation';
import Classone from './pagesClass/classOne';
import Classtwo from './pagesClass/classTwo';
import Layout3 from './serviceIntegration/navigation';
import Axiosdemo from './serviceIntegration/axiosdemo';
import Menu from './pagesClass/Menu';
import Axiospost from './serviceIntegration/axiospost';

function App() {
  return (
    <div className="App">
      {/* <Styledemo/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Greeting/>} />
          <Route path="counter" element={<Counter/>}/>
          <Route path="tempconv" element={<TemperatureConverter />}/>
          <Route path="user" element={<UserStatus />} />
          <Route path="styles" element={<WedStyle />} />
          <Route path="cls" element={<Menu />}> 
            {/* <Route index element={<Classone/>} />
            <Route path="classtwo" element={<Classtwo/>}/> */}
          </Route>
          <Route path="axiosDemo" element={<Layout3 />} />

        </Route>

        {/* classtwo */}
        <Route path="/cls" element={<Menu />}>
          <Route index element={<Classone/>} />
          <Route path="classtwo" element={<Classtwo/>}/>
       </Route>

      

       <Route path="/axiosDemo" element={<Layout3 />}>
          <Route index element={<Axiosdemo/>} />
          <Route path="post" element={<Axiospost/>}/>
       </Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
