import { useCallback } from "react"
import useCount from "./useCount"
import { Button } from "bootstrap";

const Countf =()=>{

    const info = useCount(50);

    // {count,setCount,incCount,decCount,resetCount}


    return(
       <>
            <h3>mouse over (can handle the child as well)</h3>



            <div>Count {info.count}</div>
            <button 
            onClick={()=>{
                info.incCount(50)
            }}
            onMouseOver={(e)=>{
                info.incCount(40)
                console.log(e)
            }}
            >
             {info.count}
            </button>

            <div
            onMouseOver={(e)=>{
                info.resetCount(10)
            }}>
                <br></br>
                <button>{info.count}</button>
            </div>

            {/* <button
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
            </button> */}

       </>
    )
}

export default Countf