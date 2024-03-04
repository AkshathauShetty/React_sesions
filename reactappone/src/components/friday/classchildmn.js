
import { Component } from "react"

class Classchildmon extends Component{
    constructor(props){
        super()
        this.state={
            name:'akshatha',
            add:{
                state:'karnataka',
                place:'bangalore'
            }
        }
    }


    render(){
        return(

            <>
                <h1>Child compo  </h1>
                <p>Hello from child class compo {this.props.value} </p>


                <button onClick={()=>{this.props.fun("child","mlore")}}> Click me to update</button>

                {/* {console.log(this.props.fun)} */}

                {console.log(this.props)}
            </>
        )
    }

}


export default Classchildmon