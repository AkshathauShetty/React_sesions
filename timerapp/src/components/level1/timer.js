import { useState,useEffect } from "react"

const Timer=()=>{


    const [timer,setTimer] = useState(null)
    const [isActive,setActive]=useState(false)
    const [input,setInput]=useState(null)

    const regex = /[0-9]+/

    useEffect(
        ()=>{
            let vari = null;
            if(isActive && timer>0){
                vari = setInterval(
                    ()=>{setTimer(timer-1)},1000
                )
            }
            if(timer==0){

                setTimer(null)
                alert(`timer of ${input} is complete!`)
            }

            return ()=>clearInterval(vari)
                },[isActive,timer,input]
    )

    const setInputs=(e)=>{
        const value = e.target.value
        if(regex.test(value)){
            setInput(parseInt(value));
            setTimer(value)

        }
        else{
            alert("enter a valid time in seconds !")
        }
        
    }
    return(
        <>
            <div>
                 <h1>level1 </h1>
                <input
                 value={input} 
                onChange={(e)=>setInputs(e)}
                placeholder="enter the timer to run"/>

                <span>{timer}</span>
                <button onClick={()=>{setActive(true)}}> Start</button>
                <button onClick={()=>{setActive(false)}}>Stop</button>
            </div>
  
        </>
    )

}


export default Timer