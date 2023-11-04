const Reducer= (state,action)=>{
    switch(action.type){
        case "img":
            return{
                ...state,
                img:action.payload
            }
            case "increase":
                return{
                    ...state,
                    quantity:state.quantity+1
                }
                case "decrease":
                    return{
                        ...state,
                        quantity:state.quantity-1
                    }
                    case "warning":
                        return {
                            ...state,
                            warning:true
                        }
                        case "w-replace":
                            return{
                                ...state,
                                warning:false
                            }
                            case "cart":
                                return {
                                    ...state,
                                    cart:[...state.cart,1]
                                }
                                case "remove":
                                    return{
                                        ...state,
                                        cart:state.cart.splice(0)
                                    }
                                    case "totalprice":
                                        return{
                                            ...state,
                                            total_price:state.total_price*action.payload
                                        }
    }

    return state;
}
export default Reducer;