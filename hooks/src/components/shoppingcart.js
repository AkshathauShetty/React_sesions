
import { useReducer } from "react";



const reducer =(state,action)=>{
    switch (action.type){
        case "AddItem" : const{name,price} = action.payload; return {...state,[name]:price};
        // case "removeItem" :
        default : return state;
    }
}

const Shopping=()=>{

    const [cart,dispatch] = useReducer(reducer,[{
        name:"none",
        price:0
    }])

    // const setCart = (name,price)=>({
    //     payload:{name,price}
    // });

    const getChanges=(event)=>{
        const{name:ItemName,value:ItemValue}=event.target
        dispatch({
            type:'addItem',
            payload:{ItemName,ItemValue}
        }
        )
    }


    return (
        <div>
            <input type='text' placeholder="enter the item name" name="name" value={cart.name} onChange={getChanges}></input>
            <input type='number' placeholder="enter the price of the item" name="price" value={cart.price} inChange={getChanges} ></input>
            {/* <button onClick={dispatch({action:'addItem', })}>Add</button> */}
            <button onClick={getChanges} >
            add item
             </button>
            {cart.ItemName} {cart.ItemValue}
            <button onClick={getChanges}>
                remove item
            </button>

    </div>
    )
}



// const Shopping =()=>{
   
//    return(
//     <div>
//         <button onClick={AddItem()}>
//             add item
//         </button>

//         <button onClick={AddItem()}>
//             remove item
//         </button>
//     </div>
//    )
// }

export default Shopping 