
import { useState } from "react";

const Componentcolor=()=>{

    const [color,setColor]=useState("white");
    const [name,setname]=useState(null);
    const [finalName,setFinalName]=useState(null);

    const style={
        background:color=="white"?"yellow":color,
        minHeight:'100vh'
    
        
    }

    return(  
            <div className="App" style={style}>
                <input 
                 onBlur={(e)=>setColor(e.target.value)}
                    placeholder="enter the color for background! "
                 />
                <br></br>

                <input 
                value={name}
                 onChange={(e)=>
                 {
                    console.log(e.target.value)
                    setname(e.target.value)
                    setFinalName('')
                 console.log(e.target.value)
                 }
                 }
                    placeholder="check console!"
                 />

                 <br></br>
                 <button 
                 onClick={()=>{
                        setFinalName(name);
                        setname('');
                 }}> Get name!</button>

                    <br></br>

                 <span>{finalName}</span>
                 
                 
                 
            </div>
    )

}


export default Componentcolor