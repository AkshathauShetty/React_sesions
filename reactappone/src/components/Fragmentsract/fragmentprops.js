
import React from "react"
const Fragprop =(props)=>{

    return(
        <React.Fragment>
        <>
            {props.datas.map((item,key)=>{
                return <React.Fragment key={key}>
                    <div>
                        <li>{item.name}</li>
                    </div>
                </React.Fragment>
                
            })}
            </>
        </React.Fragment>
    )

}

export default Fragprop