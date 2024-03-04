import { useCallback } from "react"
import useCount from "./useCount"
import { Button } from "bootstrap";

const Userdef =()=>{

    const info = useCount(10);

    // {count,setCount,incCount,decCount,resetCount}


    return(
       <>

            <div>Count {info.count}</div>
            <button 
            onClick={()=>{
                info.incCount(10)
            }}>
            Increment by 10
            </button>

            <button
            onClick={()=>{
                info.decCount(10)
            }}>

            Decrement by 10
            </button>

            <button
            onClick={()=>{
                info.resetCount()
            }}>
                reset
            </button>

       </>
    )
}

export default Userdef