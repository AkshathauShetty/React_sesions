
import { useEffect, useState } from "react"
import { request } from "./axiosgetreqs"

const Updates=(props)=>{

    const [userpost,setPost]=useState(props.obj)

    // useEffect(()=>{
    //     updatePost(props.obj.id);
    //     console.log("user");
    // })

    const updatePost=(id)=>{

        const url="/updatecust"
        request
            .put(url, 
                {
                    "id": id,
                    "name":userpost.name,
                    "phone":userpost.phone,
                    "email":userpost.email,
                    "dob":userpost.dob
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

            
            <input value={userpost.name} 
            onChange={(e)=>
                setPost({...userpost,
                "name":e.target.value
            })} 

            placeholder="enter name"/><br></br>

            <input value={userpost.phone}
            onChange={(e)=>
                setPost({...userpost,
                "phone":e.target.value
            })} 
            
             placeholder="enter phpne"/><br></br>

            <input value={userpost.email} 

             onChange={(e)=>
                setPost({...userpost,
                "email":e.target.value
            })}
             placeholder="enter email"/><br></br>

            <input value={userpost.dob}
             onChange={(e)=>
                setPost({...userpost,
                "dob":e.target.value
            })} 
             placeholder="enter dob"/><br></br>

             <button 
             onClick={()=>updatePost(props.obj.id)}>
                Update
             </button>
        </div>
    )
}

export default Updates