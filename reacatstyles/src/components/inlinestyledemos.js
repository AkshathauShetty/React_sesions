import Sheetstyling from "./sheetstyling"
import { useState } from "react"
import Button from 'react-bootstrap/Button';

const Styledemo=()=>{
    
    const [count,setCount]=useState(false)

    const styles={
        backgroundColor:"pink",
        color:"indigo"
    }

    const styles1={
        backgroundColor: count? "black":"indigo",
        color:count? "orange":"black"
        
    }

    return(
        <>
            <div style={ {backgroundColor:"yellow"}}>
                Hello from inline styling
            </div>

            <div style={styles}>
                hello from styles using variables
            </div>

            <div style={styles1}>
                 Changing here !
            </div>

            <Button variant="primary" onClick={()=>{setCount(!count)}}>Click me to get new color</Button>
            {console.log(count)}
            <Sheetstyling/>
        </>
        
    )
}




export default Styledemo