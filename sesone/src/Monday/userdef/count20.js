import { useCallback } from "react"
import useCount from "./useCount"
import { Button } from "bootstrap";

const Countt =()=>{

    const info = useCount(20);

    // {count,setCount,incCount,decCount,resetCount}


    return(
       <>

            <div>Count {info.count}</div>
            <button 
            onClick={()=>{
                info.incCount(20)
            }}>
            Increment by 10
            </button>

            <button
            onClick={()=>{
                info.decCount(20)
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

export default Countt