import { Component } from "react";
import Contextforclass from "./contextprovider";

import Class222 from "./class222";

export default class Loader extends Component{

    static contextType = Contextforclass

    // state={
    //     profile:null
    // }

    componentDidMount() {
        console.log("didmount")
        setTimeout(()=>{
            this._initProfile()
        },5000
        )
       
      }
    
      _initProfile() {
        const context = this.context;
        console.log("context",this.context)
        //Let's fill the context with some value! You can get it from db too.
        const profileData = {
          fullName: 'John Doe',
          username: 'johndoe',
          region: 'EU',
          age: 20
        }
        context.setProfile(profileData);
    }

    render(){
        return( <>
            {console.log("--------->",this.context)}
            <div>{   this.context.profile? this.context.profile.fullName : <p>loading..</p>}</div>
            <Class222/>
        </>
        )

    }


    componentDidUpdate(prevprops,prevstate,snapshot){
        console.log(this.context.profile)
        return null;
    }
}