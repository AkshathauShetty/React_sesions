import { Component } from "react";


class Classone extends Component{

    constructor(props){
        super(props);
        this.state={
            value:10,
            data:{
                name:"akshatha",
                age:22
            }
            
        }
    }


    componentDidMount(){
        
    }

    updateAge=(age)=>{
        
        this.setState({
            data:{
                name:"akshatha",
                age:age
            }

        })
    }

    updateName(name) {

        this.setState({
            data:{
                name:name,
                age:this.state.data.age
            }

        })
        
    }

    render(){
        return(
            <>
                <div>{this.state.value}</div>
                <p>{this.state.data.age}</p>
                <p>{this.state.data.name}</p>
                <button  onClick={()=>{this.updateAge(20)}}>Update age</button>
                {/* <button  onClick={}>Update name</button> */}
            </>
        )
    }
    
}

export default Classone