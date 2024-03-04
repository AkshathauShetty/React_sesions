import { useState } from "react"

const Logout=(props)=>{
    const[userName,setUsername]=useState(null);

    return(
        <>

            <input 
                value={userName}
                onBlur={(e)=>setUsername(e.target.value)}
                placeholder="enter name"
            />

            {console.log("in logout",props.obj)}
            <button onClick={()=>
            {
                props.obj.setUser({
                isActive:true,
                name:userName
            })}
            }>
                Login
            </button>
        </>
    )

}

const Login=(props)=>{

    return(
        <> 
            <div>
            welcome back! {props.obj.userStatus.name}
            </div>
            {console.log("login",props.obj)}
            <button onClick={()=>{
                props.obj.setUser({
                    isActive:false,
                    name:null
                })}
            }>
                    LogOut
            </button>
        </>
    )

}
const UserStatuss=()=>{

    const [userStatus,setUser]=useState({
        isActive:false,
        name:null
    });
   


    return(
       <>

            
            {userStatus.isActive? <Login 
                        obj={{setUser,userStatus}}
                        /> :

                         <Logout
                           obj={{setUser,userStatus}} 
                         /> }
       </>
    )
}

export default UserStatuss