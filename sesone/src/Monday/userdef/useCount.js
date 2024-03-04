import { useEffect, useState } from "react";


const useCount=(counts)=>{

    const[count,setCount]=useState(counts);

    const incCount=(num)=>{

        setCount(pc=>pc+num)
    }
    const decCount=(num)=>{
        setCount(pc=>pc-num)
    }

    const resetCount=()=>{
        setCount(0)
    }


    return {count,setCount,incCount,decCount,resetCount}
}


export default useCount