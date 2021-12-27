import React from "react";
import {CartItem}from "../Components/CartItem";
import {useSelector} from "react-redux";

export const Cart = () => {
    const  cartItems =useSelector(state => state.cart);
    const total = useSelector(state => state.cart.reduce((total, item) => total + item.quantity * item.article.price, 0));
    console.log(cartItems);

    return (<div>
            <h1>Cart</h1>
             <div className="row">
                    {cartItems.map(item => { 
                        return (<div className={'col-3'} key={item.article.id}>
                            <CartItem item={item} />            
                        </div>);}
                    )}
             </div>
             <br />
             <h3>
                Total: {total}
             </h3>
            <button className="btn btn-primary btn-block">Pay</button>
            </div>
            );}
