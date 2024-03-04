import axios from "axios";
import { useEffect, useState } from "react";
import Axiosdemo from "./axiosdemo";

const url = "https://jsonplaceholder.typicode.com/posts";

const Axiospost=()=>{


    const [post,setPost] = useState()


    const [count,setCount ]  = useState(1);

    const[state,setState] = useState("Loading")

    useEffect( ()=>{
        setState("Loading")
        axios.get(url+"/"+count).then((response)=>{
            setPost(response.data)
            setState("success")
        }
        )
        .catch((error)=>{console.log(error)
                setState("error")
        }
            );
    },[count]
    )

    const createPost=()=>{
        axios
            .post(url, 
                {
                    title:"hello welcome to react",
                    body:"this is a new post"
                })
            .then((response)=>{
                setPost(response.data);
            }

            );
    }

    return(
        <div>
                <h1>Axios post requests</h1>
                <br></br>
                {console.log("posts-------",post,state)}
                { state=="Loading"? <div>Loading...</div> : state=="error" ? <div> error loading the page</div> :
                    <div>
                    
                        <h4>Title: {post.title}</h4>
                        <p>Body: {post.body}</p>
                    </div>
                }

                <input value={count} onChange={(e)=>{setCount(parseInt(e.target.value))}}/>
                {console.log(count)}
                
                <button onClick={createPost}>Create Post</button>

        </div>
    )

}

export default Axiospost