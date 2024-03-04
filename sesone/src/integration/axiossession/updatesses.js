
import { useEffect, useState } from "react"
import { requestses } from "./axiosputses";

const Updateses=(props)=>{

    const [userpost,setPost]=useState(props);

    // useEffect(()=>{
    //     updatePost(props.obj.id);
    //     console.log("user");
    // })

    const updatePost=(id)=>{

        const url="/updateuser"
        requestses 
            .put(url, 
                {
                    id:id,
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
                })
            .catch((error)=>{
                    console.log(error);
                });
            }
    

    return(
        <div>

            
            <input value={userpost.user_name} 
            onChange={(e)=>
                setPost({...userpost,
                "user_name":e.target.value
            })} 

            placeholder="enter name"/><br></br>

            <input
            type='password'
             value={userpost.user_password}
            onChange={(e)=>
                setPost({...userpost,
                "user_password":e.target.value
            })} 
            
             placeholder="enter password"/><br></br>

           

             <button 
             onClick={()=>updatePost(props.obj.id)}>
                Update
             </button>
        </div>
    )
}

export default Updateses