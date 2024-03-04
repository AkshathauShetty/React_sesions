import { useReducer } from "react";

const reducer =(state,action)=>{
    switch (action.type){
        case "Increment" :return {count:state.count+1, showText:state.showText} ; break;
        case "Toggle" :return {count:state.count, showText:!state.showText} ; break;
        case "Decrement" :return {count:state.count-1, showText:state.showText} ; break;

        default : return state;
    }
}

const ReducerDemo =()=>{
    const [state,dispatch] = useReducer(reducer,{
        count:0,
        showText:true
    })

    return(
        <div>
            <h1>{state.count}</h1>
            <h1>{state.showText}</h1>

            <button onClick={()=> {
                dispatch({
                    type:"Increment"
                })
            } }>
            Increment
            </button>
            

            <button onClick={()=> {
                dispatch({
                    type:"Decrement"
                })
            } }>
            Decrement
            </button>

            <button onClick={()=> {
                dispatch({
                    type:"Toggle"
                })
            } }>
            Toggle
            </button>

            {state.showText && <p>Hello</p>}


        </div>
    )
}

export default ReducerDemo