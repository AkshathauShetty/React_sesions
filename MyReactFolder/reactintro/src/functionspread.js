

export default function Spreadfunc(props){

    return (
        <div>
           <Spreaduse {...props}/>
        </div>
    )
}

function Spreaduse(props){

    return(
        <div>
            {props.PI.name}
            {props.PI.age}
        </div>
    )
}