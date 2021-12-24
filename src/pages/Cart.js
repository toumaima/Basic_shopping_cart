import React from "react";
import {CartItem}from "../Components/CartItem";
import {connect} from "react-redux";

const Cart = (props) => {
    console.log(props.cartItems);

        return (
            <div>
                <h1>Cart</h1>

                <div className="row">
                    {props.cartItems.map(item => { 
                        return (<div className={'col-3'} key={item.article.id}>
                            <CartItem item={item} />
                
                        </div>);}
                    )}
                </div>

                <br />
                <h3>
                    Total: {props.total}
                </h3>
                <button className="btn btn-primary btn-block">Pay</button>
            </div>
        );
    }



    const mapStateToProps = (state) => {
        return {
            cartItems: state.cart,
     
            total: state.cart.reduce((total, item) => total + item.quantity * item.article.price, 0),
        };
    }

   
    export default connect(mapStateToProps)(Cart);

