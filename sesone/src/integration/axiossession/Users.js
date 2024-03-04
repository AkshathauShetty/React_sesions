import { useState } from "react"
import { requestses } from "./axiosputses";
import Updateses from "./updatesses";

const Users=(props)=>{

    const [user,setuser]=useState(props.obj)

    const [userpost,setPost]=useState(null);
    const [update,setUpdate]=useState(false);

    const deletePost=(id)=>{
        console.log("delete called")
        const url=`/deluser?id=${id}`
        requestses
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
            {
                console.log("7654567654",user,props)
            }

            <span>{user.id}  : </span>
            <span>{user.user_name}</span><br></br>
            <button
            onClick={()=>{
                deletePost(user.id)
            }}>
            delete
            </button>

            <button
            onClick={()=>{setUpdate(true)}}
            >Update</button>
            <br></br>

            {
                update? <Updateses obj={user}/> :""
            }


        </div>
    )

}

export default Users