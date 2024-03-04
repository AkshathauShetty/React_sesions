import logos from './logo.svg';


//make sure you have written everything inside one parent element 
//with name of the function starting from capital letter
// below is the  named import
export function HelloWorld(){
    return (
        <div>
            <img src={logos} className="App-logo" alt="logo"/>
            <div>HelloWorld </div>
        </div>
    )
}



export  function Renamed(){
    return (
        <div>Renamed to rename </div>
    )
}

export default function(){
    return (
        <div>Welcome function without a name </div>
    )
}
// makes the component available to other modules.
// there can be only one default export


//export default Welcome

// with default export , while importing we can name it to whatever we like as there is just one default export.
// with just import, the name should sme and must have curly braces, with multiple named exports from the file.



