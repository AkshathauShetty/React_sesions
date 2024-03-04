import { Component } from "react";


class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }


    incrementCount=()=>{
        console.log('inside')
        this.setState(
            {
                count:this.state.count+1
            }
        )
        return
    }
   
    render(){
        return(
            <div>
                <h2>Class component</h2>
                <button onClick={this.incrementCount}> Click me to get the updated count </button>

                {/* fun call with () and without()  the onw below diesnt end the call ! */}
                {/* <button onClick={this.incrementCount()}> Click me to get the updated count </button> */}
                

                {/* <button onClick={()=>{
                    this.incrementCount()
                }}> Click me to get the updated count </button>
                 */}

                <p>{this.state.count}</p>
            </div>
        ) 
    }
    

}

export default Counter