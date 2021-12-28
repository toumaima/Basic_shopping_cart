 
 import {ADD_TO_CART,REMOVE_FROM_CART} from "../actions/types"

 
 export const cartReducer=(state, action) => {
   console.log(state, action);

    switch(action.type)
    {
     case  ADD_TO_CART:{ 
        return {cart : [...state.cart, {article:action.article,  quantity: action.quantity}]

     }}
     case REMOVE_FROM_CART: {
      return {cart: state.cart.filter((item) => item.article.id !== action.index)} ;

     }
     default: return state;

    }}
  