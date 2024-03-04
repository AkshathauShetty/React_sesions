import { Component } from "react";




class Compdidmnt extends Component{
    constructor(props){
        super(props);
        this.state={
            data:props.url
        }
    }

    componentWillMount(){
        fetch(this.state.data)
        .then(response=>response.json())
        .then(resData=>{
            console.log("state is: ",this.state)
            this.setState({   
                 
                data:resData
                
            })
        })
    }

    render(){
        const {data} = this.state
        console.log("data is :",data,"data---",data[0])
        return(
            <div>
                <h1>using componentWillMount</h1>
                <div>name: {data[0]["name"]}</div>
                <div>email: {data[0]["email"]}</div>
                <div>body: {data[0]["body"]}</div>
            </div>
        )
    }
}




export default Compdidmnt