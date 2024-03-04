import { Component } from "react";
import Compoupdate from "../updates/Compoupdate";


class Getderstat extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            name:"constructor",
            count:0
        }
    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps",)
        // this.setState({
        //     count:this.state.count+1
        // })
        return null;
    }

    componentDidMount(){
        console.log("component did mount")
        // updates to DOM after the dom has beeen mounted is made here 
        // AJAX calls can be made
        // may be load a page based on the seletion by the user
        setTimeout(()=>{

        this.setState({
            name:"component did mount"
        })
        },5000)
        
    }

    render(){
        console.log("render method is called ")
        return(
            <>
                <h1>getDerivedStateFromProps</h1>
                <div>{this.state.name}</div>
               { console.log(this.state)}
            </>
        )
    }
}


export default Getderstat