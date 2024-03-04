
//e Context Consumer itself as a component.

import { Component } from "react"
import Contextforclass from "./contextprovider"

export default class Class222 extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Contextforclass.Consumer>
          {profiless=> (
            <div><b>Hello Again,</b> {profiless.profile? <p>{profiless.profile.fullName}</p> :console.log("null")}</div>
        
          )}

        

         
        </Contextforclass.Consumer>
        
        
      </div>
    )
  }
}