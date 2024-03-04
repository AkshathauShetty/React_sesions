import { Component } from "react";
import Unmountch from "./getc";


class Unmounts extends Component{

    constructor(){
        super();
        this.state={
            get:false
        }
    }


    updateState=(state)=>{
        this.setState({
            get:state
        })
    }

    render(){
        return(
            <>
                 <h1>Unmounting --- </h1>
                {
                    this.state.get? 
                <button  onClick={()=>{this.updateState(false)}} >don't get child</button> :
                <button  onClick={()=>{this.updateState(true)}} >get child</button>

                }
                {this.state.get? <Unmountch setst= {this.updateState} />: <div>no access</div>}
            </>
        )
    }
}


export default Unmounts