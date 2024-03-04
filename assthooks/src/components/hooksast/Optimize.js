import { useCallback, useRef, useState } from "react"
import useFetchdata from "./fetchData"
import { useEffect } from "react";

const Optimize=({data})=>{

  //  const regex = /^https:\/\//;
  //  const [lists] =useFetchdata(data)
    const [list,setList]=useState([])

    //use useref to store the refernece of the function created 
    const ref = useRef()


    const [theme,setTheme]=useState(false)


    const render = useCallback((prop)=>{
            console.log("rendered once")
            setList(prop)
        },[data]
    )

    useEffect(
        ()=>{
            ref.current=render;
        }
    )

    // const render =(prop)=>{
    //     console.log("rendered once")
    //     setList(prop)
    // }

   

    const styles1={
        "backgroundColor": theme?"indigo":"pink"
    }

    return(
        <div style={styles1}>
            <h1> Performance Optimization with useCallback </h1>
            <button onClick={()=>{render(data)}}>Get data</button>
            {/* { regex.test(data) ?   lists.map( (item) =><li key={item}>{item.username}</li> ) : list.map( (item) =><li key={item}>{item}</li> )} */}
            <button onClick={()=>{setTheme(!theme)}}>Change theme</button>
            { list.map( (item) =><li key={item}>{item}</li> )}
            {console.log("render",render)}
            {/* the below gives true for the renders sfter the fisrt one as the input props data is not changing afte r the first render
            the usecallback  uses the same function.
            but in case of normal function without using usecallback ,  gives false for all the renders, as it is creating a new function on each render with a new refernce.*/}
            {console.log(ref.current==render)}

        </div>

    )

}

export default Optimize