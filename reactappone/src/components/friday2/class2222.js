// import { Component } from "react";
// import Contextforclass from "./contextprovider";

// //The first one, is when you want to use your context and provide it outside render() method.

// class Class22 extends Component{
//     static contextType = Contextforclass;

//     constructor(props) {
//         super(props);
//         //Let's declare an empty profile state here.
//        this.state = {
//           profile: {},
//         };
//       }

//       componentDidMount() {
//         const context = this.context;
//         //It will get the data from context, and put it into the state.
//         this.setState({ profile: context.profile });
//       }

//       render() {
//         const { profile } = this.state;
//         return (
//           <div>
//             <h3>Welcome, { profile.fullName }</h3>
//           </div>
//         )
//       }
// }


// export default Class22