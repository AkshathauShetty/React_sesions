import { useEffect, useState } from "react"

import axios from "axios";


const url="https://jsonplaceholder.typicode.com/posts"
const Axiosdemo =()=>{

    const [post,setPost ]  = useState(null)

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

    return (

        <div>
                <h1>Axios get requests</h1>
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
        </div>
      );
}


export  default Axiosdemo 