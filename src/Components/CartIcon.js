import React from "react";
import {IconButton, Notification} from"./CartIcon.style";

import {useSelector} from "react-redux";
import {Link } from "react-router-dom";

export const CartIcon = () => {
  
  const totalQuantity =useSelector( state => state.cart.reduce((total, item) => total+parseInt(item.quantity), 0));

    return <Link to={"/cart"}>  
          <IconButton>
          {(totalQuantity >0 ) && (<Notification> {totalQuantity} </Notification>)}
            <svg fill="none" viewBox="0 0 24 24" stroke="pink">
               <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
             </svg>
          </IconButton>
        </Link>
}