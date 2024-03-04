import { Component } from "react";



class Compoupdate extends Component{


    constructor(props){
        super(props)
        this.state={
            data:[],
            name:"constructors",
            // names:props.name
        }
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
        },2000)
       
    }

    static getDerivedStateFromProps(){
        console.log("get der state")
    }

    shouldComponentUpdate(nextprops,nextstate){
        console.log("shouldComponentUpdate")      
        return true;
    }





    render(){
        return(
            <div>
                <h1>Update life cycle  methods</h1>
                <div>{this.state.name}</div>
                <div>{this.state.names}</div>
                {console.log("render")}
               
            </div>
        )
    }


    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log(" getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log(" componentDidUpdate")
        return null;
    }
  
}


export default Compoupdate