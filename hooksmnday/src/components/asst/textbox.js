
import { useState } from "react"

const Textbox=()=>{

    // const [name,setName]= useState("akshatha")

    const [count,setCount]= useState(0)

return(
    <>
    <input onChange={()=>{setCount(count=>count+1)}} placeholder="enter the name"/>
    {count}
    </>

)

}


export default Textbox;