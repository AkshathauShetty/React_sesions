import { createContext, useContext, useEffect, useReducer, useState } from "react"

const Mycontext = createContext({
    status:{
    name:null,
    isActive:false
    }
})

const LogIn=()=>{
    const {status} = useContext(Mycontext)


    return(
        <>
        {console.log("00000",status)}
            <p>Hello , Welcome back! {status.userStatus.name}</p>
          
            <button onClick={()=>
            status.setUser(
                {
                name:null,
                isActive:false})}
                >
            Logout</button>
        </>
    )

}


const LogOut = ()=>{
    // const statuss= useContext(Mycontext)

    const {status}= useContext(Mycontext)

    const[names,setname]=useState(null);

   

    return(
        <>
            {console.log("6767676",status)}

            {/* {console.log("454545",statuss)} */}

            <input 
            placeholder="enter name"
            value={names}
            onChange={(e)=>{setname(e.target.value)}}
            />

            
            <button onClick={()=>
            status.setUser(
                {
                name:names,
                isActive:true})}
                >
            Login</button>
            
        </>
    )
}



const UserStatus =()=>{

    
    const [userStatus,setUser]=useState({
        isActive:false,
        name:null
    });
    



    const [theme,setTheme]=useState(true);

    const style={
        backgroundColor:theme? "blue":"pink"
    }


    return(
        <div style={style}>
            {
                userStatus.isActive?
                <>
                    <Mycontext.Provider value={{status:{userStatus,setUser}}} >
                    <LogIn/>
                    </Mycontext.Provider>
               </>
                :
                <>
                    <Mycontext.Provider value={{status:{userStatus,setUser}}} >
                    <LogOut/>
                    </Mycontext.Provider>
               </>
            }

             <button onClick={()=>setTheme(!theme)}>Toggle theme</button>

        </div>
    )
}

export default UserStatus