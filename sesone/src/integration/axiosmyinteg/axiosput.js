
import { request } from "./axiosgetreqs";

const Axiosinsert=()=>{

    const [userpost,setPost]=useState({
        name:null,
        phone:null,
        email:null,
        dob:null,
        "address":[{
            "id":0,
            "address1":null,
            "address2":null,
            "city":null,
            "pin":null
        }]
    });

    const createPost=()=>{
        const url="/savecust"
        request
            .post(url, 
                {
                    "name":userpost.name,
                     "phone":userpost.phone,
                     "email":userpost.email,
                     "dob":userpost.dob,
                     "address":[{
                        "id":userpost.address.id,
                        "address1":userpost.address.id,
                        "address2":userpost.address.id,
                        "city":null,
                        "pin":null
                    }]
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
            }

            );
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