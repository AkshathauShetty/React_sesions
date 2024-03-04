
import { createContext, useState } from "react"
import { useContext } from "react"

let context = createContext(null)
const Home=()=>{
    const [name,Setname]=useState("akshatha shetty")

    const [info,setInfo]=useState({
        name:"akshatha",
        age:22,
        bgc:"indigo"
    })

    return(
        // <div style={
        //     {
        //         backgroundColor:"indigo"
        //  }
        // }>

        <div>
            <h1>Home page ----</h1>
            {/* <context.Provider value={name}>  */}
            {/* <context.Provider value={info}>  */}

            <context.Provider value={ {name,info,Setname,setInfo}} > 
            <Main/>
            </context.Provider>

        </div>
    )
}

const Main=()=>{
    return(
        <>
            <p>Welcome this is main page</p>
            <Content/>
        </>
    )

}

const Content=()=>{
    return(
        <>
            <p>This is content page</p>
            <Message/>
        </>
    )

}

const Message=()=>{
    // const  name  = useContext(context);

    // const  {name,age}  = useContext(context); // destructure and use  

    const  infos = useContext(context); /// directly use


    return(
        <div style={
            
                infos.info.bgc=="indigo"? {backgroundColor:"green"} :{backgroundColor:infos.info.bgc}
            
        }>
            <p>Hello from  message</p>
            {/* <h3>welcome {name} age: {age} </h3> */}

            <h3>welcome {infos.name} age: {infos.age} </h3>

            <h3>welcome {infos.name} age: {infos.info.age} </h3>

            <button onClick={ ()=>{ infos.Setname("asshu")}}>Click me to update the name</button>

            <button onClick={
                ()=>{
                    infos.setInfo({
                        ...infos.info,
                        bgc:"pink"
                    })
                }
            } >Change color</button>

        <button onClick={
                ()=>{
                    infos.setInfo({
                        ...infos.info,
                        bgc:"darkviolet"
                    })
                }
            } >Change color</button>


        </div>
        
    )

}

export default Home