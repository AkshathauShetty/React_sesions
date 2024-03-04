import { useDeferredValue, useEffect } from "react"

import { useState } from "react"
import { useRef } from "react"

const Usingrefs=()=>{

    const [name,setname] = useState("akshatha")

    const [counts,setcounts] = useState(0)

    const count =  useRef(0)

    const pcount =  useRef(" none")

    useEffect(
        ()=>{
            pcount.current=name
            count.current=count.current+1
        }
    )


    // useEffect(()=>{
    //     setcounts(count=>count+1)
    // },[name]
    // )

    return(
        <>
            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)} }/>
            <input value={count.current} ></input>
            { count.current}

            {/* <button 
                onClick={
                    ()=>{
                        console.log("count is : ",count)
                        count.current.focus();
                    }
                }
            >Click me to focus </button> */}
            <br></br>
            {/* {counts} */}

           <p>prev valu : {pcount.current}</p>
           



        </>
    )
}



export default Usingrefs