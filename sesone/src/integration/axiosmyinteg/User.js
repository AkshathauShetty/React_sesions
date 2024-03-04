import { request } from "./axiosgetreqs";
import { useState } from "react";
import Updates from "./updateCompo";

const User=(props)=>{

    const [user,setuser]=useState(props.obj);
    const [userpost,setPost]=useState(null);
    const [update,setUpdate]=useState(false);

    const deletePost=(id)=>{
        console.log("delete called")
        const url=`/delcust?id=${id}`
        request
            .delete(url, 
                {
                    headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Header":"Content-Type",
                        "Access-Control-Allow-Origin": "*",
                    }    
                })
            .then((response)=>{
                console.log("response data:",response.data)
                setuser(response.data);
                console.log("userpost: ",user)
                }
                )
            .catch((error)=>{
                alert("error:");
                console.log(error);
            });
    }

  

    return(
        <div>
            <span>{props.obj.name}</span><br></br>
            <span>{props.obj.email}</span><br></br>
            <span>{props.obj.dob}</span><br></br>
            <span>{props.obj.phone}</span><br></br>

            <button
            onClick={()=>{
                deletePost(props.obj.id)
            }}
            >Delete</button>

            <button
            onClick={()=>{setUpdate(true)}}
            >Update</button><br></br>

            {
                update? <Updates obj={user}/> :""
            }


        </div>
    )
}

export default User