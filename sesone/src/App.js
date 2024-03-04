import logo from './logo.svg';
import './App.css';
import Componentone from './components/sesone/componentone';
import Classone from './components/sesone/classone';
import Componentcolor from './components/sesone/componentcolor';
import './components/sesone/css/style1.css'
import Ueffect from './components/useEffects/counters';
import UserStatus from './components/useEffects/userstatus';
import Contextexample from './components/usecontextss/usecontexteg';
import Integaxios from './integration/axiosmyinteg/axiosgetreqs';
import Counterdef from './components/hwasst/counter';
import UserStatuss from './components/useEffects/userlogin';
import Axiosinsertses from './integration/axiossession/axiosputses';
import Userinsert from './integration/axiossession/axiosgetses';
import Userget from './integration/axiossession/axiosgetses';
import Useredone from './Monday/usered/usered';
import Useref from './Monday/useref/useref';
import Usest from './Monday/usememo/prodlists';
import Userdef from './wedDay/eveentss/userdef';
import Countf from './wedDay/eveentss/count50';
import Countt from './wedDay/eveentss/count20';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './Monday/riutingf/layout';
import Home from './Monday/riutingf/home';
import Aboutus from './Monday/riutingf/about';
import User from './Monday/riutingf/user';
import UseFormsss from './wedDay/frmss/useformss';
import Eventss from './wedDay/events/evnyss';
import Keyupasanddown from './wedDay/eveentss/keyupsanddown';
import Regexps from './wedDay/regex/regexp';
import Valis from './wedDay/validation/formvali';

function App() {
  return (
    <div className="App">
      
      {/* <Componentone
        info={{
          name:"akshatha",
          designation:"developer"
        }
        }
      />

      <Classone/> */}
      {/* <h1>Background change !</h1>

      <Componentcolor/> */}

      {/* <Ueffect/> */}

      {/* <UserStatus/>
      <UserStatuss/> */}
      

      {/* <Contextexample/> */}

      {/* <Integaxios/> */}

      {/* <Counterdef/> */}

        {/* <Userget/> */}
      {/* <Axiosinsertses/> */}



      {/* <Useredone/> */}

      {/* <Useref/> */}

      {/* <Usest/> */}

      {/* <Userdef/>

      <Countf/>

      <Countt/> */}

      
{/*       
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus />}/>
          <Route path="/contactus" element={<User />}/>
         
        </Route>
      </Routes>
      </BrowserRouter> */}

    


      <Eventss/>

      <Countf/>
      <br></br>
      <Countt/>
      <br></br>
      <Userdef/>
      <br>
      </br>
      <Keyupasanddown/>

      <Regexps/>
      <Valis/>

      <UseFormsss/>

      
    </div>
  );
}

export default App;
