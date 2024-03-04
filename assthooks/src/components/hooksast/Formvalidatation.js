import { useCallback, useRef } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
const Formvalidation=()=>{

    const name=useRef("none")
    const email= useRef("none")
    const phone = useRef(" ")

    const nreg=/^[a-zA-Z]*$/;
    const ereg =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    // const preg = 

    const [errorMessage,setMessage]=useState(
        {
            names:" ",
            emails: " ",
            passwords:" "
        }
    )


    // const [valid,setvaid]=useState("")
    

    const validateForm=useCallback((e)=>{
        console.log("event",e)
        console.log("name",name,"email",email,"phone",phone)
        
        let names = e.target.name
        let values = e.target.value

        if(names=="name"){
            if(values=="" || (!nreg.test(values))  ){
                console.log(values)
                setMessage({
                    ...errorMessage,
                    names:"enter a valid name"
                })
                name.current.value=""
            
            }
            if(values=""){
                setMessage({
                    ...errorMessage,
                    names:" "
                })
            }
            // else{
            //     name.current.value="";         
            // }
            // else{
            //     setvaid({
            //         ...valid,
            //         names:true
            //     })
            // }
        }


        else if(names=="email"){
            if(values==""  || (!ereg.test(values))){
                console.log("emaila errooor!! ...........",values)
                setMessage({
                    ...errorMessage,
                    emails:"enter a valid email"
                });
              // email.current.value="enter a valid email";
              email.current.value=""
            }
            if(values=""){
                setMessage({
                    ...errorMessage,
                    emails:" "
                })
            }
            // else{
            //     setMessage({
            //         ...valid,
            //         emails:true
            //     })
            // }
        }
        else{
            if(values=="" || values.lenght<8){
                console.log(values)
                setMessage({
                    ...errorMessage,
                    passwords:"enter a valid password"
                })
               // phone.current.value="0000";
               phone.current.value=""
            }
            if(values=""){
                setMessage({
                    ...errorMessage,
                    passwords:" "
                })
            }
            // else{
            //     setvaid({
            //         ...valid,
            //         passwords:true
            //     })
            // }
        }

    },[name,email,phone])

    const submit=()=>{
        if(errorMessage.names!=" " ) {//|| name.current.value=="name can't be empty!" || email.current.value=="email can't be empty!" || phone.current.value=="0000"){
            alert(errorMessage.names)
        }
        else if(errorMessage.emails!=" " ) {//|| name.current.value=="name can't be empty!" || email.current.value=="email can't be empty!" || phone.current.value=="0000"){
            alert(errorMessage.emails)
        }
        else if(errorMessage.passwords!=" " ) {//|| name.current.value=="name can't be empty!" || email.current.value=="email can't be empty!" || phone.current.value=="0000"){
            alert(errorMessage.passwords)
        }
        else{
            alert("form submitted successfully!")
        }
    }

    const styles={
        "backgroundColor":"pink",
        "border":"2px solid black",
        "borderRadius":"10px",
       
    }

    return(
        <div>
            
            <Form style={styles}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control
                    required
                    name="name"
                    ref={name}
                    // value={name.current.value}
                    type="text" placeholder="name"
                    onBlur={validateForm} />
                </Form.Group>
                <span>{errorMessage.names}</span>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    required
                    name="email"
                    ref={email}
                    //value={email.current.value}
                     type="email" placeholder="email@example.com"
                     onBlur={validateForm}  />
                </Form.Group>
                <span>{errorMessage.emails}</span>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    required
                    name="phone"
                    ref={phone}
                   // value={phone.current.value}
                    type="password" placeholder="enter your password"
                    onBlur={validateForm}  />
                </Form.Group>
                <div><span>{errorMessage.passwords}</span></div>
                

                <Button variant="primary" onClick={submit} style={{textAlign:"center",fontFamily:"serif",fontStyle:"italic"}}>Submit</Button>
                {
                    console.log("name",name,email,phone)
                }
                {console.log("render!")}

            </Form>
        </div>
    )

}


export default Formvalidation
