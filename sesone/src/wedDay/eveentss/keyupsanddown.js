


const Keyupasanddown =()=>{

    return(
        <div>

            <input
                onKeyDown={(e)=>{
                    console.log(e)
                    if(e.keyCode===16){
                        e.target.value=''
                    }
                    else if(e.ctrlKey===true){
                        e.target.value=" "
                    }

                    else if(e.code==="ShiftLeft"){
                        e.target.value=''
                    }
                    console.log(e.code,e.keyCode,e.ctrlKey)
                    // e.target.value=e.key
                    // e.target.value=e.key
                }}
            />


            <input
                onKeyUp={(e)=>{
                    console.log(e)
                    if(e.keyCode===16){
                        e.target.value=''
                    }
                    else if(e.ctrlKey===true){
                        e.target.value=''
                    }
                    e.target.value=e.key
                }}
            />
            
        </div>
    )
}


export default Keyupasanddown