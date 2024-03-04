

import { useState } from "react";

const Counter=()=> {

  const [count, setCount] = useState(100)
 
  return (
    <div>
       {count}
       <button onClick={ ()=> 
          setCount(count+10)
          
       }>Increment </button>

    

    </div>
   

  )
}

export default Counter;
