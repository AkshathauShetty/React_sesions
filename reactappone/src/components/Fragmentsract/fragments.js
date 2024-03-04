import React from "react"
import Fragprop from "./fragmentprops"

const Fragmentseg=()=>{

    const data=[{
        name:"akshatha",
        age:22,
        place:"bangalore"
    },
    {
        name:"soop",
        age:22,
        place:"bangalore"
    },
    {
        name:"thrish",
        age:22,
        place:"bangalore"
    }
]
   return(
    <React.Fragment key={data}>
        <div>helllo... from fragments!!</div>
        <Fragprop
            datas={data} />
    </React.Fragment>

   )
}

export default Fragmentseg