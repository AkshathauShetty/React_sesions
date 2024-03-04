import { useCallback } from "react"
import useCount from "./useCount"
import { Button } from "bootstrap";

const Countt =()=>{

    const info = useCount(20);

    // {count,setCount,incCount,decCount,resetCount}


    return(
       <>

            <h3> on mouse enter</h3>
            <div>Count {info.count}</div>
            <button 
            onClick={(e)=>{
                info.incCount(20)
                console.log(e)

            }}
            onMouseEnter={(e)=>{
                console.log(e)
                info.incCount(10)

            }}
            
            >
            {info.count}
            </button>
           

            <div
            onMouseEnter={(e)=>{
                info.decCount(10)
            }}>
                <br></br>
                <button>{info.count}</button>
            </div>

            {/* <button
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
            </button> */}

       </>
    )
}

export default Countt