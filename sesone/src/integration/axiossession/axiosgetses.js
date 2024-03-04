import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "bootstrap";
import Axiosinsertses, { requestses } from "./axiosputses";
import Users from "./Users";


// export const requestses = axios.create(
//     {
//         baseURL:"http://localhost:8080/perform"
//     }
// );



const Userget =()=>{

    const [item,setItem]=useState(null);

    const [add,setAdd]=useState(false);

    // const [item,setItem]=useState(null);
    const [error,setError]=useState(null);

    useEffect(()=>{
        requestses
            .get(
                "/getusers",
                {
                    headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Header":"Content-Type",
                        "Access-Control-Allow-Origin": "*",
                    }
    
                })
            .then((response)=>{
                    if(response.status===200){
                        console.log("resp",response.data);
                        setItem(response.data)
                    }
                })
            .catch(error=>{
                setError(error)
                //console.log(error)
            });
    },[]);

    if (error) return `Error: ${error.message}`;
    if (!item) return "No info!"

    
    return(
        <div>

           <button
           onClick={
            ()=>{
                setAdd(true)
            }
           }
           >
        add
           </button>

           {
            add? 
            <div>
                <Axiosinsertses setadd={setAdd}

                />
            </div>:
            <div>
                
            </div>
           }

           {
            item==null? <div>No info!</div>:
            
            item.map(
                (items)=>
                {
                    
                    return <Users key={items.id}
                     obj={items}
                     set={setItem}
                      />
                }
            )
           
           
           }
        </div>
    )
}

export default Userget