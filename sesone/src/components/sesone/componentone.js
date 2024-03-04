import { useRef, useState } from "react";


const Componentone =(props)=>{

    const [count,setCount]=useState(30);

    let [once,setOnce] = useState();

    const [isActive,setActive]=useState(false);


   let ref=useRef();


    const updateCount=()=>{
        // refer = setInterval(
        //     ()=>{setCount(count=>count-1)},1000
        // )
        // clearInterval(refer)
        if(isActive==false){
            setCount((count)=>count-1);
            clearTimeout(once)
            setOnce(null);
            once = setTimeout(updateCount,1000);
            setActive(true);
        }
       
    }



    
    const updateCounts=()=>{
        // console.log("before:",ref);
        // clearInterval(ref);
        // ref= null;
        // console.log(ref);
        ref = setInterval(
            ()=>{setCount(count=>count-1)},
            1000)
        // setTimeout(clearInterval(ref),900);

    }

    return(
        <>
            <div>
                <p>name is : {props.info.name}</p>
                <br></br>
                {props.info.designation}
                <br></br>
                {count}
                <br></br>
                <button onClick={()=>{setCount(count-1)}} > - </button>

                <br></br>
                <button onClick={()=>{setCount(count+1)}} > + </button>

                <br></br>

                <button onClick={()=>{updateCount();}} > update count </button>

                <br></br>

                <button onClick={()=>{clearInterval(ref);updateCounts();}} > update Counts </button>
                

            </div>
        </>
    )
}

export default Componentone;