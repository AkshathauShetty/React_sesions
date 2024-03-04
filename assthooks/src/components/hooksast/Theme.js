import { createContext, useContext } from "react"
import Button from 'react-bootstrap/Button';

import { useState } from "react";

const themecontext = createContext(null)
const Theme=()=>{

    const [light,setTheme] = useState(false)

    // const changeTheme=()=>{
    //     setTheme(light=>(!light))
    // }
    const styles={
       "backgroundColor": light? "white" : "black",
        "color": light? "black" :"white"
    }
    
    return(
        <div style={styles}>
            <h1> Theme Switching with Context</h1>
            <p>Welcome to Home page...</p>
             <Button variant="danger" onClick={()=>setTheme(!light)}>Toggle theme </Button>
             <themecontext.Provider value={ {light,setTheme} } > 
                <Content/>
            </themecontext.Provider>

        </div>
    )
}

const Content=()=>{

    return(
        <>
            <p>content displayed...</p>
            <Info/>

        </>
    )
}


const Info=()=>{

    const theme = useContext(themecontext)
    return(
        <>
            <p>Information is  being displaued </p>
            {console.log("theme",theme)}
            <input onChange={()=>{theme.setTheme(!theme.light)}}/>
        </>
    )
}



export default Theme

