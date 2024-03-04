import { useState } from "react";


const Eventss =()=>{


    const [count,setCount] =useState(0);

   const  handlechange=(e)=>{
        console.log(e);
        if(count==3){
            e.target.hidden=true
        }
        else{
            setCount(count+1)
        }
       
        
        
    }

    const handleclicks=(e)=>{
        e.preventDefault();
        alert("The page can't be redirected!!")
    }


    // const handleunload=(e)=>{
    //     addEventListener("unload",(e)=>{
    //         console.log(e);
    //         e.preventDefault();
    //     })


    // }

  
 return(
    <div>
        {/* <input type="text"
        onChange={(event)=>
        {
            handlechange(event)
        }
        }
        /> */}

        <span>{count}</span>


        {/* {
        count<3?

        <button
        onClick={(e)=>
        {

            handlechange(e)
        }}
        >
        Increment
        </button> : '' } */}


        <button
        onClick={(e)=>
        {

            handlechange(e)
        }}
        >
        Increment
        </button> 

        <br></br>


        <div>
            <form onSubmit={(e)=>e.preventDefault}>
                <input />
                <button  type="submit" >Submit </button>
            </form>


            <li>
            <a href="https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt" 
            onClick={(e)=>
            {
                handleclicks(e);
            }}
            >npx kill-port 3000</a></li>
        </div>

        <div>
            <h3>Event listeners</h3>
            <p>event.target.hidden=true</p>
            <input
                onChange={(e)=>{
                    // e.target.hidePopover=true
                    e.target.hidden=true

                }}
            />
            <br></br>
            <p>event.screenX and event.screenY</p>
            <button onClick={(e)=>{
                console.log(e.screenX);
                console.log(e.screenY);
            }}>
                CLick!
            </button>

        </div>


        <div>
            <h5>Form events --  React forms</h5>
            <form

            onunload={(e)=>{
                e.preventDefault();
                alert("onunload event attribute called");
                console.log(e)
            }

            }
            onSubmit={(e)=>
            {
                e.preventDefault();
            e.preventDefault()
            console.log(e.target[0].value, e.target[1].value)

            }
            }

            onReset={(e)=>{
                e.preventDefault();
                e.target[0].value=''
                e.target[1].value=''

            }}
            >
                <input  placeholder="enter your name"/><br></br>
                <input  placeholder="enter your phone"/><br></br>
                <button type="submit">Submit</button><br></br>
                <a
              
                 href="https://www.w3schools.com/jsref/event_onunload.asp">Unload event! </a>
               
                <button type="reset" >Reset</button>
            </form>


        </div>




    </div>
 )

}


export default Eventss