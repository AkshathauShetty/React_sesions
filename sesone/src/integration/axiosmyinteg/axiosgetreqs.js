import axios from "axios";
import { useEffect, useRef, useState } from "react";
import User from "./User";
import { Button } from "bootstrap";


export const request = axios.create(
    {
        baseURL:"http://localhost:8080/perform"
    }
);



const Integaxios =()=>{

    const [item,setItem]=useState(null);
    const [error,setError]=useState(null);
    const id = useRef(id);

    useEffect(()=>{
        request
            .get(
                "/getcusts",
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

            <input 
                placeholder="enter id of user"
                onChange={(e)=>{
                    id.current=e.target.value
                }}
            />

           <Button
           onClick={
            ()=>{

            }
           }>
            add
           </Button>
           {
            item==null? <div>No info!</div>:
            
            item.map(
                (items)=>
                {
                    
                    return <User key={items.id}
                     obj={items}
                     set={setItem}
                      />
                }
            )
           
           
           }
        </div>
    )
}

export default Integaxios