import { useEffect, useState } from "react"


const Effectdemo=()=>{
    const [count, setCount] = useState(0)
    const[ inputState,setInputValue]=useState('')

    useEffect(()=>{
        setTimeout( ()=>{
            setCount(count=>count+1)
            },2000)
    },[inputState,count])

    return(
        <div>
            {/* <button onClick={ ()=> 
                setTimeout(
                setCount(count+1),20000)
            }>Increment </button> */}

            <input onChange={(event)=>setInputValue(event.target.value)}></input>

            {
            <p>   {count} </p>
            }
        </div>
    )
}

export default Effectdemo




 
