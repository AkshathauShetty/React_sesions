import React from "react"
import { useState, useEffect } from "react"


 const Ueffectbtn =()=>{
    const [data, setData] = useState("")
    const[ count,setCount]=useState(0)

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json() )
        .then ( resDate=>{
            console.log(resDate)
        })     
        },[])
   

    return(
        <div>
            <button onClick={ ()=> 
               setDate
            }>Count </button>

            {/* <input onChange={(event)=>setInputValue(event.target.value)}></input>

            {
            <p>   {count} </p>
            } */}
        </div>
    )
}

export default Ueffectbtn

