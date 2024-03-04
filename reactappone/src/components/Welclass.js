import { Component } from "react";
import React from "react";

class Welclass extends Component{
    render(){
        return(
                <h1>class component says hello! </h1>
        )
    }
}

//calback , loosely cpld, when to use class/fun compo
// state, when, without and with state
//props, manage state bwn compo
export class WelclassState extends Component{
    constructor(props){
        super(props)
        //this.updateState=this.updateState
        this.state={
            firstname:"akshatha",
            caller : function (){
              return   <h4> hello from caller </h4>
            }
        }
    }

    updateState=()=>{
        this.setState(
            {
            firstname:"helo"
            }
        ) 
    }
displayer=()=>{
    this.updateState("name")
// this.setState(
//     {
//     firstname:"helo2"
//     }

}

    render(){
        return(
            <>
                <h1>class component with constructor  says hello! {this.state.firstname} {this.state.caller()}</h1>
                <button type="button" onClick={this.updateState}> click here </button>
                <button type="button" onClick={this.displayer}> click here </button>
               
            </>
        )
    }
}


export default  Welclass
// function WelcomeInClass(){
//     return(

//     )
// }



// state : instance of react component 
// can be though of as an object with a set of properties that control the behavior of the componnent.