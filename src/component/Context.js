import React ,{ useReducer } from "react";
import { useContext } from "react";
import Reducer from "./Reducer";
const AppContext=React.createContext();
const  initialize={
    img:"image-product-1.jpg",
    cart:[],
    quantity:1,
    warning:false,
    price:225,
    total_price:225
}
const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,initialize);

const change=(url)=>{
dispatch({type:"img",
payload:url})
}
const increase=()=>{
dispatch({
type:"increase"
})
}
const decrease=()=>{
    dispatch({
    type:"decrease"
    })
    }
const addcart=()=>{
    
    if(state.cart.length===0){
      dispatch({type:"totalprice",
    payload:state.quantity})
    console.log(state.quantity)
     dispatch({
        type:"cart",
        
    })
}
    else{
dispatch({
    type:"warning"
})
    }
    
}
const remove=()=>{
    console.log("remove")
    dispatch({type:"remove",
})
}
// dispatch({
//     type:"w-replace"
// })

    return (
      
        <AppContext.Provider value={{...state,change,increase,decrease,addcart,remove}}>
            {children}
        </AppContext.Provider>
    )
}



const useGlobalContext=()=>{
return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext};