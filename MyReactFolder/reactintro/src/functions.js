/*
Pure functions and props in js

Pure functions-> dont change with the inout, dont change at different time with the same inout, dont change the higher variables and objects.

props -> only parameters that can be passed to our component

*/


// below is an example of good functions.

function Compute({val}){
    return(
        <div>{val*2} *2</div>
    )
}

export default Compute

// bad function below
// when we call the same counting functions at different times , with dame parameters, the output of the functions will be different.

let value=9;
export function Counting(){
    value=value+2
    return (
        <div>{value}</div>
    )
}

// use props -> as pass them while calling Counting

export function CountingProp({values}){
    values=values+2;
    return (
        <div>{values}</div>
    )

}