import { useState,useEffect } from "react"

const Timerthree=()=>{


    const [timer,setTimer] = useState(null)
    const [isActive,setActive]=useState(false)
    const [input,setInput]=useState(0)

    useEffect(
        ()=>{
            let vari = null;
            if(isActive && timer>0){
                vari = setInterval(
                    ()=>{setTimer(timer-1)},1000
                )
            }

            return ()=>clearInterval(vari)
                },[isActive,timer,input]
    )

    const begin=()=>{
        setTimer(input)
        
    }
    return(
        <>
            <div>
                 <h1>level3 </h1>
                <input
                 value={input} 
                onChange={(e)=>{setInput(parseInt(e.target.value));setTimer(()=>(e.target.value))}}
                placeholder="enter the timer to run"/>

                <span>{timer}</span>
                <button onClick={()=>{setActive(true)}}> Start</button>
                <button onClick={()=>{setActive(false)}}>Stop</button>

                <button onClick={()=>{setTimer(null);begin()}}> restart</button> 
            </div>

        </>
    )

}


export default Timerthree