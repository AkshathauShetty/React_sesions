import { useState } from "react"
import Childfuns from "./childfunmn"


const Fncompo=(props)=>{

    const [ age,setAge ]= useState(0)

    const [ display,setDisplay ]= useState('false')

    let [ object,setObj ]= useState(props)

    let [ object2,setObj2 ]= useState({
        name:'akshatha in ob2',
        age:22

    })

    const update=()=>{
        let obj={name:'akshatha age:'+age,
                funs: {
                 
                    age: 230,
                    fun:function(){
                        return(
                            <p>hello from function</p>
                        )
                    }
                
                },
                interest:'painting',
                country:'europe'
                 }
        
        setObj(obj)        
        setObj2(obj)
    }

    // setObj2=()=>{
    //     {
    //         object2.name='new name'
    //     }
    // }

   
    
        
    
   

    return(
        <div>
            <h1> {props.funs.fun()} </h1>
            <h2>Hello from function {props.name}  variable inside {age}</h2>

            <label> </label>
            {/* <button onClick={
                ()=><p> age is : {age}</p>
            }> Click me to get age </button> */}

            <button onClick={()=>{setAge(age => age+1)} }> Click me to get new age </button>

            <button onClick={update}> Click me to get new object name </button>

            <button onClick={update}> Click me to get new object name </button>



            {/* <button onClick={()=>{setObj2(object2= object2='new name')}}> Click me to get new object name </button>
           */}

           {
            <div>
                <p>
                   {object.name} <br></br>
                   {object.interest}
                </p>

                <p>
                   {object2.name}
                   <br></br>
                   {object2.interest}
                </p>

            </div>
           }


           <Childfuns fun={setAge} />
        </div>
        
    )
}


export default Fncompo

// name='akshatha'
// funs={
// {  
//     age: 30,
//     fun:function(){
//         return(
//             <p>hello from function</p>
//         )
//     }
// }
// }
// interest='drawing'
// country='India'