
import { useReducer } from "react";
import { useState } from "react";


const reducer =(state,action)=>{
    switch (action.type){
       case "addItem" : return [...state,{name:action.payload.name , price:action.payload.price}];break;
      //  case "addItem" : console.log ([...state,{name:action.payload.name , price:action.payload.price}]);return state;break;
        case "removeItem" :return [...state].filter(item=>item.name!=action.payload.name)
        default : return state;
    }
}

const Shopcarts=()=>{

    const [state,dispatch] = useReducer(reducer,[{
        name:"",
        price:''
    }])



    const [cart,fun] = useState({
        name:'',
        price:''
    })

    const updateChange= (event)=>{
        let name = event.target.name
        let value = event.target.value
        console.log(name,value)
        fun({
            ...cart,
            [name]:value
         })
      //   console.log(cart)
    };

    const clearFields=()=>{
        cart.name=''
        cart.price=''
    }
    // const getEmailChanges = (event)=>{
    //     dispatch({
    //         type:'setPrice',
    //         payload:event.target.value
    //     })
    // }

    // const getChanges = (event)=>{
    //     dispatch({
    //         type:'setPrice',
    //         payload: {name:cart.name, price: cart.price}
    //     })
    // }

    

    return (
        <div>
            <input type='text' placeholder="enter the item name" value={cart.name} name='name' onChange={updateChange}></input>
            <br></br>
            <input type='number' placeholder="enter the price of the item" value={cart.price} name='price' onChange={updateChange} ></input>

            <br></br>
            <br></br>

            {/* <button onClick={dispatch({action:'addItem', })}>Add</button> */}
            <button onClick={()=> {dispatch({
                type:'addItem',
                payload:{name: cart.name,  price:cart.price}
            
            });  clearFields() }
            } >
            add item
             </button>

          
            <button  onClick={()=>dispatch({
                type:'removeItem',
                payload:{name: cart.name}
            })} >
            Remove item
            </button>

            {
                state.map(
                    item =>
                    <> <p> {item.name} {item.price} </p></>
                )
            }

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

export default Shopcarts 