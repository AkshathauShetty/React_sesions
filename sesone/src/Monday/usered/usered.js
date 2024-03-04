import { useReducer, useState } from "react"
import { act } from "react-dom/test-utils";


const reducer=(state,action)=>{
    switch (action.type){
        case "submit": 
                if(state.name!=null && state.email!=null){
                    alert("form submitted succefully!"); console.log("printing: ",state.name,state.email);return {name:action.payload.name, email:action.payload.email};
                }
                else{
                    alert("Input fields can't be null!");
                }
        case "changeemail":return {...state, email:action.payload.email};
        case "changename":  return {...state, name:action.payload.name};
        default :return state;

    }

}


const Useredone =()=>{

    const [todo, dispatch] = useReducer(reducer,{})





    return (
        <>
            <input
            type="text"
            placeholder="enter your name"
            onChange={(e)=>{
              
                dispatch(
                    {
                        type:"changename",
                        payload:{
                            name:e.target.value
                        }
                    }
                )
            }

            }
            />

            <br></br>

            <input
            type="email"
            placeholder="enter your email"
            onChange={(e)=>{

                dispatch(
                    {
                        type:"changeemail",
                        payload:{
                            email:e.target.value
                        }
                    }
                )

            }

            }
            />

            <br></br>

            <button
            onClick={()=>{
                dispatch(
                    {
                        type:"submit",
                        payload:todo
                    }
                )
            }}
            >Submit</button>



        </>
    )



}

export default Useredone