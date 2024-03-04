import { isVisible } from "@testing-library/user-event/dist/utils"
import { useState,useEffect } from "react"
import Swal from "sweetalert2"

const Timerfour=()=>{


    const [timer,setTimer] = useState(null)
    const [isActive,setActive]=useState(false)
    const [input,setInput]=useState(0)
    const [isVisible,setVisible]=useState(false)
    const [isValid,setValid]=useState(true)

    // const [inputset,setInputset]=useState(0)

    const regex = /[0-9]+/

    useEffect(
        ()=>{
            let vari = null;
            if(isActive && timer>0){
                vari = setInterval(
                    ()=>{setTimer(timer-1)},1000
                )
            }
            if(timer==0){
                begin()
                generate()
                setVisible(false)
                setActive(false)
                //setInputs(input) 
                //console.log("timer and inp-> ",timer,input)         
            }
            return ()=>clearInterval(vari)
                },[isActive,timer]
    )

   
    /*
    This is called on change in the input fields 
    initially the counter field is not visible -> visible is false
    start button is shown-> active is false

    regex is used to check for numbers
                if valid then the validation is set to true
                input is set to the value
                timer is set to the input value
    if failed: 
                validation is set to false 
                input is set to ''
                timer is cleared 
                error generation code is called 
    */
    const setInputs=(val)=>{
        
       // console.log(val)
        setVisible(false)
        setActive(false)
        const value =val;
        if(regex.test(value)){
            setValid(true)
            setInput(parseInt(value));
            setTimer(value)   
                
        }     
        
        else{
            console.log("invalid input")
            // setInput(()=>'')
            setInput((pi)=>pi='')
            setTimer(null)
            setValid(false)
            generate('error')       
        }       
    }

    //when timer ends switch the button back , reset the timer 
    const setTostart=()=>{
        if(timer==0){
            setActive(false)
            setTimer(input)
        }
    }

    // below code is run for restart and when the timer completes once
    const begin=()=>{
        setTimer(input)     
        setVisible(false) 
        setActive(false)
    }

    // below is the code for generation of alert on success and error
    const generate=(name)=>{

        if(name=='error'){
        Swal.fire({
            title: "Error!",
            text: `Please Enter A Valid Time In Second(s)`,
            icon: "error"
          });
        }
        else{
            Swal.fire({
                title: "Complete!",
                text: `timer of ${input} is complete!`,
                icon: "success"
            });
        }
    }



    /*
    below code checks if the input is valid or not
    initially isValid is false, and is set by the change in input fields
    */
    const validation=()=>{
        if(isValid){
            setActive(true);
            setTostart();
            setVisible(true);
        }
        else{
            generate('error')
        }
    }

    const styles={
        "backgroundColor":"pink",
        "border":"2px solid black",
        "borderRadius":"10px"
        
    }
    return(
        <>
            <div style={styles}>
                <h1> Timer ⏰</h1>
                <h3>level 4</h3>

                <input
                 value={input} 
                onChange={(e)=>setInputs(e.target.value)}
                placeholder="enter the timer to run"/>


                <br></br>
                {isVisible?
                <span style={{"color":"red"}}>{timer}</span>:''
                }

                <br></br>
                {
                     isActive? <button onClick={()=>{setActive(false);setTostart()}}>Pause</button> : <button onClick={()=>{validation()}}>Start</button>
                }

                <br></br>
                <button onClick={()=>{begin()}}> Reset</button> 
                <br></br>
                <p></p>
            </div>
           
        </>
    )

}


export default Timerfour