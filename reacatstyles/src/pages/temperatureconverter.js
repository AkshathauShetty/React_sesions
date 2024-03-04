import { useState } from "react"

 
 const TemperatureConverter =()=>{
    const [temp,convertTemp]  = useState({
        cTemp:0,
        farTemp:32
    })

    const getcTemp=(event)=>{      
        console.log(event)
        const ftemp = event.target.value
        const ctemp=(5/9)*(ftemp-32)
        convertTemp({
            ...temp,
            'cTemp':ctemp,
            'farTemp':ftemp
            
         })
         console.log(temp.cTemp,temp.farTemp)
         console.log(temp)
        // convertTemp(()=>{
        //     temp.celTemp=ctemp
        //     temp.farTemp=ftemp
        // })
    }
    const getfTemp=(event)=>{
        console.log("hello")
        console.log(temp)
        console.log(event)
        const ctemp = event.target.value
        const ftemp=(ctemp*(9/5))+32
        // convertTemp({         
        //     cTemp:ctemp,
        //     ftem:ftemp
        // })
        // convertTemp(()=>{
        //     temp.celTemp=ctemp
        //     temp.farTemp=ftemp
        // })
        convertTemp({
            ...temp,
            'cTemp':ctemp,
            'farTemp':ftemp          
         })
        console.log(temp.cTemp,temp.farTemp)
        console.log(temp)      
    }

    return(
        <>
            <h2>States</h2>
            <input type="number" name="farTemp" value={temp.farTemp} onChange={getcTemp} placeholder="temperature in degree Fahrenheit"/>
            <br></br>
            <input type="number" name="cTemp" value={temp.cTemp} onChange={getfTemp} placeholder="temperature is degree celcius  "/>
            <br></br>
        </>
    )
 }

export default TemperatureConverter