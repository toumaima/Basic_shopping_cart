import {ADD_TO_CART,REMOVE_FROM_CART } from "../actions/types";

export const addToCart= (article, quantity) => {
    return {
        type: ADD_TO_CART,
        article, 
        quantity
    }
}

export function removeFromCart(index){
  return {
      type: REMOVE_FROM_CART,
      index
  }
}