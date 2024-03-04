
const Welcome=()=>{
    return (
        <h1>welcome to js </h1>
    )
}

export const Welcomevar=({name})=>{
    return (
        <h1>welcome to js {name} </h1>
    )
}

export const Welcomeprop=(props)=>{
    return (
        <h1>welcome to js {props.info.name} {props.info.age} </h1>
    )
}



export default Welcome
