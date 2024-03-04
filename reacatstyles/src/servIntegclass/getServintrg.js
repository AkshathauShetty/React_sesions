
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const url="https://jsonplaceholder.typicode.com/posts"
// http://localhost:8080/perform/getcust/1

const Getservinteg=()=>{
    
    const [userpost,setPost]=useState(" ")
    
    useEffect(()=>{
        getCustomer();
    },[]
 )

    const getCustomer=()=>{
        // const url="https://jsonplaceholder.typicode.com/posts"
        const url="http://localhost:8080/perform/getcust/1"
        axios
            .get(url, 
            {
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Header":"Content-Type",

                    // 👇️ your domain below, e.g. http://localhost:3000
                    "Access-Control-Allow-Origin": "*",
                 //   "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
                  //  "Access-Control-Allow-Headers":"Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"

                }

            })
            .then((response)=>{
                    if(response.status===200){
                        console.log(response.data);
                    //    let datas = response.data.map((item)=>{
                    //     return <div>
                    //         <li>{item.title}</li>

                    //     </div>
                    //    }
                    //     )
                         setPost(response.data)

                    
                    }

                }
                )

    }

    return(
        <div>
            { <div>{userpost.dob}</div>}
        </div>
    )
}

export default Getservinteg