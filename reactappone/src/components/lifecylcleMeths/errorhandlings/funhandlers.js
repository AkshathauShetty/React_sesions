

const Funhandlers =(props)=>{

    if(props.info==""){
        throw new Error("Enter name!! ")
    }

    return(
        <>
            <div>{props.info}</div>
        </>
    )
}


export default Funhandlers;