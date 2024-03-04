import { Component, useDeferredValue } from "react";
import Classchildmon from "./classchildmn";

class Classmon extends Component{
    constructor(){
        super()
        this.state={
            name:'akshatha',
            add:{
                state:'karnataka',
                place:'bangalore'
            }
        }
    }

    updateStates=(name,place)=>{
        console.log("name is: ",name,place)
        this.setState(
            {
                name:name,
                add:{
                    state:"karnataka",
                    place:place
                }
            }
        )
    }

    render(){
        return(
            <>
                <h2>Class and states :</h2>
                <p> {this.state.name} , {this.state.add.state} , {this.state.add.place} </p>
                {/* <button  onClick={this.updateStates} >Click me</button> */}

                <button  onClick={ ()=>{this.updateStates("akshatha shetty","udupi") }} >Click me</button>

                <Classchildmon
                    value= {this.state.name}
                    fun= {this.updateStates}
                />
            </>
        )
    }
}

export default Classmon 