
import { useState } from "react";
const { useEffect } = require("react");
const Ueffect =()=>{

    const [count,getNum]=useState(0);

      
    useEffect(()=>{
        //componentDidMount. called only on the first render
        console.log("component did mount")
    },[]
    )

    useEffect(()=>{

        console.log("component did update")
        if(count==9){
        return ()=>console.log("comp unmounted")
        }

    } ,[count]  
    )

  

    return(
        <div>
            {count}
            <button 
            onClick={()=>{(getNum(count+1))}
            }
            >
             update
            </button>
        </div>
    )
}

export default Ueffect