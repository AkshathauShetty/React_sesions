import { Component } from "react";


class Unmountch extends Component{
    constructor(){
        super()
        this.state={
            name:"children"
        }
    }


    getinfo=()=>{
        this.setState={
            name:"mouse down event added"
        }
    }
    updatest=()=>{
        this.setState(
            {
                name:"child called ..."

            }
        )
        document.addEventListener("keyup",this.getinfo)
    }


    mounted=()=>{
        this.setState(
            {
                name:"mounting phase.. added the event ..."

            }
        )
    }


    componentDidMount(){
        document.addEventListener("mousedown",this.mounted)
    }

    render(){
        return(
            <>
                <h1>Child loaded....</h1>
                <p>Child loaded </p>
                <button  onClick={this.updatest}>Get state</button>
                {this.state.name}
                
            </>
        )
   }


   componentWillUnmount(){
    document.removeEventListener("mousedown",this.mounted)
   }
}


export default Unmountch