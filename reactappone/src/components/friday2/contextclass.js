import { createContext } from "react"
import Loader from "./2loader"
import { Component } from "react"
import Contextforclass from "./contextprovider"

export default class Classcomp1 extends Component{

    setProfile=(profile)=>{
        this.setState({profile})
    }

    state={
        profile:null,
        setProfile:this.setProfile
    }

   

    render(){
        return (
        <Contextforclass.Provider value={this.state}>
                <Loader/>
        </Contextforclass.Provider>
        )
    }
}