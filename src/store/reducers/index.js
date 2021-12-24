 
 import {ADD_TO_CART} from "../actions/types"

 
 export const cartReducer=(state, action) => {
   console.log(state, action);

    switch(action.type)
    {
     case  ADD_TO_CART:{ 
        return {cart : [...state.cart, {article:action.article,  quantity: action.quantity}]

     }}
     default: return state;

    }}
 
   
//export const deleteFromCart=(state, action) =>{

  // switch(action.type)
   //{
   // case  DELETE_FROM_CART:{ 
     //  return {cart : [...state.cart, {article:action.article,  quantity: action.quantity}]

   // }}
    //default: return state;

  // }
//}