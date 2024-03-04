import { useReducer } from "react";



const reducer =(state,action)=>{
    switch (action.type){
        case "Add" : return [...state ,{ name: action.value, remove:"X"}] ;break;
        case "Remove" : return( [...state].filter((item,index)=> index!=action.ind) );break;
        default : return state;break;
    }
}



const Shop=()=>{

    const [state,dispatch] = useReducer(reducer,[{
        name:'',
        remove:''
    }])

  

    return (
        <div>
           
           <button onClick={()=>dispatch({
            type:'Add',
            value:'item1'
            
           })} value="item1" >
            Item 1
            </button>
           <br></br>
            <button onClick={ ()=>dispatch({
            type:'Add',
            value:'item2'
           })} value="item2" >
            Item 2
            </button>
           <br></br>
           

           
         { state.map((item,index)=><><p> {item.name} <button onClick={()=>dispatch({
            type:'Remove',
            ind:index
         })}>{item.remove}</button></p> </> ) }
           

    </div>
    )
}




export default Shop 