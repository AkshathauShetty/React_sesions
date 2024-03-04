import { useEffect, useReducer, useState } from "react"



const LogIn=(getLogstatus)=>{


    return(
        <>
            <p>Hello , Welcome to React this is conditional rendering... </p>
            <button onClick={()=>getLogstatus({isLogged:false})}>Logout</button>
        </>
    )

}


const LogOut = (getLogstatus)=>{
    // const [info, getInfo] = useState({
    //     name:"",
    //     pwd:""
    // })

     // useEffect(
    //     getLogstatus(
    //         {
    //             isLogged:false
    //         }
    //     )
    // )

    // const updateChange=(event)=>{
    //     const name=event.target.name
    //     const value=event.target.value
    //     getInfo({
    //         [name]:value
    //     })

    // }
   
    
    // useEffect(
    //     getLogstatus(
    //         {
    //             isLogged:false
    //         }
    //     )
    // )

    const log=()=>{
        getLogstatus({isLogged:true})
    }

    return(
        <>
            {/* <input type="text" name="name" value={info.name} onChange={(event)=>{updateChange(event)}} placeholder="enter name" /><br></br>
            <input type= 'password' name="pwd" value = {info.pwd}  onChange={(event)=>{updateChange(event)}} placeholder="password" /><br></br>       
            <br>
            </br> */}
            {/* {info.name} */}
            <button onClick={()=>getLogstatus({isLogged:true})}>Login</button>
            
            {/* <button onClick={()=>{log()}}>Login</button> */}
        </>
    )
}



const UserStatus =()=>{
    

    const [Logstatus, getLogstatus] = useState({
        isLogged:false
    })


    return(
        <>
            <h2>Conditional renderieng ...</h2>  
            {console.log(Logstatus.isLogged)} 
            { Logstatus.isLogged ? LogIn(getLogstatus):LogOut(getLogstatus) }
        </>
    )
}

export default UserStatus