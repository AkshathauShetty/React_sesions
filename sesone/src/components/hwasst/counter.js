import { useEffect, useRef, useState } from "react"


const Counterdef=()=>{

    const [count,setCount] = useState(30);
    const[isActive,setActive]=useState(true)

    const num=useRef(null);
    const value = useRef(null);

    let id=null;

    useEffect(()=>{

        num.current=Math.round(Math.random()*10000);
        alert(num.current)

    },[])

    useEffect(()=>{
        id=null;
        if(isActive){
            id = setInterval(
                ()=>{setCount(count-1)},1000
            )
        }
        return ()=>clearInterval(id);

    },[isActive,count]);
   
    const check=()=>{

        if(num.current==value.current){
            setActive(false);
        }

    }


    return(
        <>
            {count}
            {
                console.log(value)
            }
            <input
            value={value.current}
            onChange={(e)=>value.current=e.target.value}
            />
            <button onClick={check}>
                Pause
            </button>

            <button
            onClick={()=>setCount(30)}>
                reset
            </button>

        </>
    )
}

export default Counterdef