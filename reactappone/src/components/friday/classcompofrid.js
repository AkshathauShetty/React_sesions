import { Component } from "react";


class Classcompo extends Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name,
            fun:props.funs.fun
        }


    }

    setFun=()=>{
        this.fun={
            
        }
    }
    render(){

        return(
            <p>Hello from class component {this.state.name} <br></br> calling props function in parent: {this.state.fun()} </p>
        )
    }
}

export default Classcompo