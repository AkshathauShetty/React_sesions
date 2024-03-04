import { Component } from "react";
import Mycontext from "./contextcreate";
import Chilconsumes from "./cpntextconsumer";



class Classp  extends Component{

    constructor(props){
        super(props)
        this.state={
            info:{
                theme:false,
                name:"akshatha"
            },
            setInfo:this.setInfo
        }
    }

    setInfo=(info)=>{
    this.setState({info})
    }

    // style={
    //    "backgroundColor":this.state.info.theme?"black":"white"
    // }


    render(){
            return(
                <div  style= {this.state.theme?{backgroundColor:"black"}:{backgroundColor:"pink"}}>
                    <h1>Hello from new class </h1>
                    <Mycontext.Provider value={this.state}>
                        <Chilconsumes/>
                    </Mycontext.Provider>
                </div>
            )
    }
}


export default Classp