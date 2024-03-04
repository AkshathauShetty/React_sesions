import { Component } from "react"

 function LoginButton(props){
    return (
        <>
            <button onClick={props.onClick}>Login</button>
        </>
    )
}


 function LogoutButton(props){
    return (
        <>
            <button onClick={props.onClick}>Logout</button>
        </>
    )
}

function UserGreeting(props){
    return <h1> Welcome back</h1>
}

function GuestGreeting(props){
    return <h2>Please sign Up</h2>
}



function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    else{
        return <GuestGreeting/>
    }
}




class Logincontrolclass extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoggedIn : "true"
        }
    }

    handleLogin=()=>{
        this.setState({
            isLoggedIn:true
        })
    }

     handleLogout=()=>{
        this.setState({
            isLoggedIn:false
        })
    }



    render(){  
       const isLoggedIn = this.state.isLoggedIn;
       let button
       if(isLoggedIn){
           button = (<LoginButton onClick={()=>this.handleLogout()}> </LoginButton>
           ) }
       
        else {
         button = (<LogoutButton onClick={()=>this.handleLogin()}></LogoutButton>
        )}
        return (
            <>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </>
        )
   }
}

export default Logincontrolclass