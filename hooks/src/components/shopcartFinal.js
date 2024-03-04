
import { useReducer } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const reducer =(state,action)=>{
    switch (action.type){
       case "addItem" : return [...state,{name:action.payload.name , price:action.payload.price}];break;
      //  case "addItem" : console.log ([...state,{name:action.payload.name , price:action.payload.price}]);return state;break;
        case "removeItem" :return [...state].filter(item=>item.name!=action.payload.name)
        default : return state;
    }
}

const Shopcartfinal=()=>{

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


            
            <div className="form-group">
            <label >Name:   </label>
            <input type="text" class="form-control" placeholder="enter the item name" value={cart.name} name='name' onChange={updateChange}></input>
            </div>
            <div class="form-group">
            <label >Price:  </label>
            <input type="number" class="form-control"  placeholder="enter the price of the item" value={cart.price} name='price' onChange={updateChange} ></input>
            </div>


            {/* <input type='text' placeholder="enter the item name" value={cart.name} name='name' onChange={updateChange}></input>
            <br></br>
            <input type='number' placeholder="enter the price of the item" value={cart.price} name='price' onChange={updateChange} ></input> */}

            <br></br>
            <br></br>
           
            
            <Button type="button" className="btn btn-primary" onClick={()=> {dispatch({
                type:'addItem',
                payload:{name: cart.name,  price:cart.price}
            
            });  clearFields() }
            } >
            add item
             </Button>

            <Button  variant="danger" onClick={()=>dispatch({
                type:'removeItem',
                payload:{name: cart.name}
            })} >
            Remove item
            </Button>

            {
                state.map(
                    item =>
                    <> <ListGroup>  <ListGroup.Item>{item.name}</ListGroup.Item>  <ListGroup.Item> {item.price} </ListGroup.Item> </ListGroup> </>
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

export default Shopcartfinal 