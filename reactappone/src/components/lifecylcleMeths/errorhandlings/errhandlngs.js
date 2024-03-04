import { Component } from "react";
import Funhandlers from "./funhandlers";
import Errhandling from "./handleerr";



class Errhandl extends Component{
    constructor(){
        super()
        this.state={
            info:"no error ... Carry on"
        }
    }

    static getDerivedStateFromError(){
        // called after renders
      
    }
    render(){
        return(
            <>
                <h1>Error handlings .....</h1>
                <Errhandling>
                    <Funhandlers  info={"akshatha"}/>
                    <Funhandlers  info={"soop"}/>
                    <Funhandlers  info={"thrish"}/>
                    <Funhandlers  info={""}/>
                </Errhandling>

                <Errhandling>
                    <Funhandlers  info={"akshatha"}/>
                </Errhandling>
                <Errhandling>
                    <Funhandlers  info={"soop"}/>
                </Errhandling>

                <Errhandling>
                    <Funhandlers  info={"thrish"}/>
                </Errhandling>

                <Errhandling>
                    <Funhandlers  info={""}/>
                </Errhandling>

            </>
        )
    }


}

export default Errhandl