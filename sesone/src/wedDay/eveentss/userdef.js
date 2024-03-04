import { useCallback } from "react"
import useCount from "./useCount"
import { Button } from "bootstrap";

const Userdef =()=>{

    const info = useCount(10);

    // {count,setCount,incCount,decCount,resetCount}


    return(
       <>
            <h3>Mouse move</h3>

            <div>Count {info.count}</div>
            <button 
            onClick={()=>{
                info.incCount(10)
            }}
            onMouseMove={(e)=>{
                console.log(e)
                info.incCount(5)
            }}
            >
             {info.count}
            </button>

            <p>Mouse over</p>

            <div
            onMouseMove={(e)=>{
                info.decCount(10)
            }}>
                <br></br>
                <button>{info.count}</button>
            </div>


            {/* <button
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
            </button> */}

       </>
    )
}

export default Userdef