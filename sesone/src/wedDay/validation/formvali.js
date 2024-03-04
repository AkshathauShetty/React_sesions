import { useState } from "react"


const Valis=()=>{

  
    const [state,setState]=useState(true)

    const [info,setInfo]=useState({
        name:'',
        email:''
    })

    const name=/^[^\s@]+$/
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value)
        if(name.test(e.target[0].value))
        {
            console.log("name valid")
            if(email.test(e.target[1].value)){
                alert("form submitted ")
                setInfo({
                    name:e.target[0].value,
                    email:e.target[1].value
                })
                e.target[0].value=''
                e.target[1].value=''
                setState(false)
            }
        }
        else{
            alert("invald details entred")
        }

        console.log(e.target[0].value, e.target[1].value,e)
    }

    return(
        <div>
            <h1>Validation </h1>
            {
                    state?
                   
                <form  onSubmit={(e)=>{
                    handlesubmit(e)
                }}>
                    <p>Name</p>
                    <input
                        
                    />

                    <p>Email</p>
                    <input/>
                    <button> Submit</button> 
                </form> : 
                    <div>
                    <p> form submitted! </p>
                    <p>name :{info.name}</p>
                    <p> email : {info.email}</p>
                    </div>
                
                
            }



         
            
        </div>
    )



}


export default Valis