import { useCallback } from "react"
import useCount from "./useCount"
import { Button } from "bootstrap";

const Countf =()=>{

    const info = useCount(50);

    // {count,setCount,incCount,decCount,resetCount}


    return(
       <>

            <div>Count {info.count}</div>
            <button 
            onClick={()=>{
                info.incCount(50)
            }}>
            Increment by 10
            </button>

            <button
            onClick={()=>{
                info.decCount(50)
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

export default Countf