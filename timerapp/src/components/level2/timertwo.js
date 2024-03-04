import { useState,useEffect } from "react"

const Timertwo=()=>{


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
            if(timer==0){
                setActive(false)
                setTimer(input)
            }
           

            return ()=>clearInterval(vari)
                },[isActive,timer,input]
    )


    const setTostart=()=>{
        if(timer==0){
            setActive(false)
        }
    }
    return(
        <>
            <div>
           `     <h1>level 2 </h1>
                <input
                 value={input} 
                onChange={(e)=>{setInput(parseInt(e.target.value));setTimer(()=>(e.target.value))}}
                placeholder="enter the timer to run"/>

                <span>{timer}</span>
                {
                isActive? <button onClick={()=>{setActive(false);setTostart()}}>stop</button> :<button onClick={()=>{setActive(true);setTostart(); }}>start</button>
                }
            </div>
     
        </>
    )

}


export default Timertwo