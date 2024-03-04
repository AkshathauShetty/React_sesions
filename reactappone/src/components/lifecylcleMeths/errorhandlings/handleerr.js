import { Component } from "react";


class Errhandling extends Component{
    constructor(props){
        super(props);
        this.state={
            Error:false
        }
    }

    static getDerivedStateFromError(){
        // called after renders
        // provides a fallback ui
        return (
            {Error:true}
        )
    }

    componentDidCatch(error,info){
        // can be used to log the error in the database
        console.log(error)
    }

    render(){
        return(
            <>
               { this.state.Error? <div>Handler is called !! </div> : this.props.children }
            </>
        )
    }
}

export default Errhandling;