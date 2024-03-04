import { useEffect } from "react";
import { useRef, useState } from "react"
import Swal from "sweetalert2";


const Userefone =()=>{
    
    const [timer,setTimer] = useState(0)
    const [isActive,setActive] = useState(false)
    let refv=useRef();

    const timerUpdates=()=>{
        clearInterval(refv.current);
        console.log(refv,isActive)
        if(!isActive){
           refv.current = setInterval(()=>{
            setTimer(timer=>timer+1)
           },1000)
           setActive(true)
        }
       

    }

    const setChange=(value)=>{
        clearInterval(refv.current);
        setActive(false)
        console.log(isActive)
        Swal.fire(
            {
                title:"updated!",
                text:"done!",
                icon:"success"
            }
        )
    }

    
    return(
        <>
            <p>Stopwatch ⏱️</p>
             <div>{timer } seconds </div>
                {console.log(isActive)}
            <button onClick={()=>{timerUpdates();}}>start</button>
            
            <button onClick={()=>{setChange(false)}}>stop</button>

            <button onClick={()=>
            {
                setTimer(0);
                setChange(false)
                timerUpdates();
            }}> restart</button>
        </>
    )



}


export default Userefone