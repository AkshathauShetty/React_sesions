import { Component } from "react";
import Mycontext from "./contextcreate";



class Chilconsumes extends Component{


      static contextType=Mycontext

    componentDidMount(){
        setTimeout(()=>{
        this.setName()
        },5000
        )
    
    }

    setName=()=>{
        let context=this.context
        let info={
            theme:!context.info.theme,
            name:"akshatha shetty"

        }

        context.setInfo(info)
        

    }

    render(){
        return(
        <div>
            <h2>hello from child</h2>
            
            
            <Mycontext.Consumer>
                {(values)=>(<div> {values.info.name}
                {console.log("from te newly created child",values)}

                </div>
                )
                }
            </Mycontext.Consumer>
        </div>
        )
    }
}


export default Chilconsumes