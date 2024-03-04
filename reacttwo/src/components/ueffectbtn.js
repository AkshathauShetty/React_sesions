import React from "react"
import { useState, useEffect } from "react"


const Ueffectbtn =()=>{
    const [data, setData] = useState("")
    const[ count,setCount]=useState(0)

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json() )
        .then ( resDate=>{
             setData(resDate[count].email);
            // console.log(resDate)
        })     
        },[count])
   

    return(
        <div>

            <h1>{data}</h1>
            <h1>Count</h1>

            <p>{count}</p>

            <button onClick={ ()=> 
                 setCount(count=>count+1)
            }>Count </button>

            {/* <input onChange={(event)=>setInputValue(event.target.value)}></input>

            {
            <p>   {count} </p>
            } */}
        </div>
    )
}

export default Ueffectbtn 

