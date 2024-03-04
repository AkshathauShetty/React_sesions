import { useEffect } from "react"
import Table from 'react-bootstrap/Table';
import { useState } from "react";

//const url='https://jsonplaceholder.typicode.com/comments'
const useFetchdata=(url)=>{

    const [data,setData] = useState([])
    const[states,setStates]=useState({
        isError:false,
        isLoading:false
    })

    useEffect(()=>{
        setStates({
            ...states,
            isLoading:true
        })
        setTimeout( ()=>{
            fetch(url)
        .then(response=>response.json())
        .then(resdata=>{
            console.log(resdata)
            setData(resdata)
            setStates({
                ...states,
                isLoading:false
            })
        })
        .catch((error)=>{
            setStates({
                isLoading:false,
                isError:true
            })
        })
    },5000)
        

    },[url]
    )

    // return(
    //     <div>
    //         {console.log("Data:",data)}
    //     </div>
    // )
    return ( [data,states] );

}


export default useFetchdata