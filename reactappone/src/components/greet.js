
const profile={
    name:"akshatha",
    age:22
}

const Greeting=(user)=>{
    return user.name+" " + user.age
 
}

const Greet = <h1>hello, {Greeting(profile)} </h1>

export default Greet