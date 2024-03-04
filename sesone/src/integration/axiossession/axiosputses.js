
import { useState } from "react";
import axios from "axios";

export const requestses = axios.create(
    {
        baseURL:"http://localhost:8080/reactdemos"
    }
);

 
const Axiosinsertses=(props)=>{

    const [userpost,setPost]=useState({
        user_name:null,
        user_password:null
    });

    const [error,setError]=useState(null);


    const createUser=()=>{
       
         requestses
            .post(
                "/saveUser",
                {
                    user_name:userpost.user_name,
                    user_password:userpost.user_password
                },
                {
                    headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Header":"Content-Type",
                        "Access-Control-Allow-Origin": "*",

                    }
    
                })
            .then((response)=>{
                console.log("response data:",response.data)
                setPost(response.data);
                console.log("userpost: ",userpost)
            });

    }

    return(
        <div>

            
            <input 
            value={userpost.name} 
            onChange={(e)=>
                setPost({...userpost,
                "user_name":e.target.value
            })} 

            placeholder="enter name"/><br></br>

            <input 
            type="password"
            value={userpost.password}
            onChange={(e)=>
                setPost({...userpost,
                "user_password":e.target.value
            })} 
            
             placeholder="enter password"/><br></br>

          

             <button 
             onClick={()=>
             {
             createUser();
             props.setadd(false)
             }
             }>
                Insert
             </button>



             
        </div>
    )
}

export default Axiosinsertses