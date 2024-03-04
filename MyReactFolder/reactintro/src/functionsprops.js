

export function Profile(){

    return(
        <div>
            <Person 
                info={{name: 'akshatha',
                age: 22}}
                size={30}
            />

            <Person 
                info={{name: 'emma',
                 age: 30}}
                
            />

            <Peopleper 
                info={{name: 'den',
                age: 20}}
                size={20}
            />
        </div>
    )
}


// we can set efault values to properties using this
function Person({info,size=50} ){
    return(
        <div>
        <img
     className="Person"
      alt={info.name}
      width={size}
      height={size}
        />
        <p>name : {info.name}
         <br/> size: {size} </p>
        </div>

    )
}

// or we can also pass props

function Peopleper(props){
    return(
        <div>
            <p>
                {props.info.name}<br/>
                {props.size}              
                <br/>
            </p>
        </div>
    )
}

