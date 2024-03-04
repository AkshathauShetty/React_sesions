
import Element from './components/elememnt'
import './App.css'
import Greet from './components/greet'
import Welcome from './components/Welcome'
import Classcompo from './components/friday/classcompofrid'
import Fncompo from './components/friday/funcompofri'
import Classmon from './components/friday/classcompmn'
import Home from './components/hookscontd/usecontextss'
import Usingrefs from './components/hookscontd/userefss'
import Compdidmnt from './components/lifecylcleMeths/mountings/compdidmnt'
import Getderstat from './components/lifecylcleMeths/mountings/getderstatefromprops'
import Compoupdate from './components/lifecylcleMeths/updates/Compoupdate'
import Unmountch from './components/lifecylcleMeths/unmountings.js/getc'
import Unmounts from './components/lifecylcleMeths/unmountings.js/remove'
import Errhandl from './components/lifecylcleMeths/errorhandlings/errhandlngs'
import Loader from './components/friday2/2loader'
import Classcomp1 from './components/friday2/contextclass'
import Classp from './components/fridaycclasscontext/contextprovide'
import { Fragment } from 'react'
import Fragmentseg from './components/Fragmentsract/fragments'



const App = ()=> {
    console.log(Element)
    const elemOne = <h1> this is {5} times slower? </h1>
    return (
        <div>
            
            {/* <h1> Welcome to react!! Happy learning </h1>
            <p>Know more here - www.react.com</p>
            <Element/>
            <p>{elemOne} {Greet} </p>  
            <Welcome/> */}
            {/* <Classcompo

                name='akshatha'
                funs={
                {  
                    age: 30,
                    fun:function(){
                        return(
                            <p>hello from function passed...</p>
                        )
                    }
                }
                }
                interest='drawing'
                country='India'
                
            />
            <Fncompo 
                 name='akshatha'
                funs={
                {  
                    age: 30,
                    fun:function(){
                        return(
                            <p>hello from function ,,, passed...</p>
                        )
                    }
                }
                }
                interest='drawing'
                country='India'
            />
            
            <Classmon/>

            <Home/> */}

            {/* <Usingrefs/> */}

            {/* <Compdidmnt 
                url="https://jsonplaceholder.typicode.com/comments"
            /> */}


            {/* <Getderstat/> */}

            {/* <Compoupdate/>
            

            <Unmounts/> */}


            {/* <Errhandl/> */}

           
            <Classcomp1/>
            <Classp/>

            <Fragmentseg/>

        </div>
    )

}

export default App
