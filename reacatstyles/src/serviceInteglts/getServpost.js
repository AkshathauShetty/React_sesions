
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

//const url="https://jsonplaceholder.typicode.com/posts"
// http://localhost:8080/perform/getcust/1

const Getserpost=()=>{
    
    const [userpost,setPost]=useState({
        "name":"",
        "phone":"",
        "email":"",
        "dob":""
    })

    const [id,setId]= useState(0)
    
//     useEffect(()=>{
//         getCustomer();
//     },[]
//  )

    const getCustomer=()=>{
        // const url="https://jsonplaceholder.typicode.com/posts"
        const url="http://localhost:8080/perform/savecust"
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
                        console.log("response data: ",response.data);
                    //    let datas = response.data.map((item)=>{
                    //     return <div>
                    //         <li>{item.title}</li>

                    //     </div>
                    //    }
                    //     )
                        //  setPost(response.data)

                    
                    }

                }
                )

    }


    const createPost=()=>{
        const url="http://localhost:8080/perform/savecust"
        axios
            .post(url, 
                {
                    "name":userpost.name,
                     "phone":userpost.phone,
                     "email":userpost.email,
                     "dob":userpost.dob
                },
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
                console.log("response data:",response.data)
                setPost(response.data);
                console.log("userpost: ",userpost)
            }

            );
    }


    const updatePost=()=>{
        const url="http://localhost:8080/perform/updatecust?"
        axios
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
    
                        // 👇️ your domain below, e.g. http://localhost:3000
                        "Access-Control-Allow-Origin": "*",
                     //   "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
                      //  "Access-Control-Allow-Headers":"Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
    
                    }
    
                })
            .then((response)=>{
                console.log("response data:",response.data)
                setPost(response.data);
                console.log("userpost: ",userpost)
            }

            );
    }


    const deletePost=()=>{
        const url=`http://localhost:8080/perform/delcust?id=${id}`
        axios
            .delete(url, 
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
                console.log("response data:",response.data)
                setPost(response.data);
                console.log("userpost: ",userpost)
            }

            );
    }



    return(
        <div>
            { <div>{userpost.dob}</div>}
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

           
            <button onClick={createPost}>Add a customer</button> <br></br>
            <br></br>
           <input value ={id}
           onChange={(e)=>
            setId(e.target.value)} 
            placeholder="enter the id"/>
            <br></br>
           
            <button onClick={updatePost}>Update  a customer</button>

            <br></br>
            <br></br>
            <button onClick={deletePost}>delete  a customer</button>
        
        </div>
    )
}

export default Getserpost


