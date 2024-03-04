
import { useContext, useState,createContext } from "react"


const Mycontext = createContext(null);

const Contextexample=()=>{

    const[theme,setTheme]=useState(null);

   const style={
        backgroundColor:theme? "blue":"pink"
    }

    return(
        <div style={style}>
            <h2>Hello from parent</h2>

            <Mycontext.Provider value={{setTheme,theme}}>
                <Mychild/>
            </Mycontext.Provider>

        </div>
    )

}

const Mychild=()=>{

   const info= useContext(Mycontext)

    return(
        <div >
            <h2>Hello from child component</h2>
            <button
            onClick={()=>info.setTheme(!info.theme)}>Toggle theme </button>
        </div>
    )

}


export default Contextexample