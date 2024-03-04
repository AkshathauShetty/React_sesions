

const Regexps =()=>{

    const regexps = /^[0-9]{10}$/

    let  regcls= new RegExp("hello")
    /*
    flag conditions : i: case sensitivity 
    g: gloabal flag 


    \d [0-9]
    \D  [^0-9]
    \w  [a-zA-Z_0-9]
    \W [^\w]

    */

    const handleInput=(e)=>{
        e.preventDefault();
       
        if(!regexps.test(e.target[0].value)){
            alert("INVALID NUMBER")
        }
        else{
            e.target[0].value=''
            alert("done!")
        }
    }



    return(
        <div>

                <h2>Regular expressions </h2>

                <form onSubmit={(e)=>{handleInput(e)}}>
                    <input plcaeholder="enter your  number" />
                    <button type="submit">Submit</button>
                </form>
              
        </div>
    )
}

export default Regexps