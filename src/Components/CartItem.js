import React from "react";
import {useDispatch } from "react-redux";
import {removeFromCart} from "../store/actions/action";

export const CartItem = (props) =>{

    const {item, index} = props;
    const {article} = item;

    const dispatch = useDispatch();

    const handleRemoveFromCart = () =>{
    dispatch(removeFromCart(index) );
    }

    return ( 
        <div className="card">
            <img src={article.image} className="card-img-top" alt="capcake" width="300px"/>
            <div className="card-body">
                <h5 className="card-title">
                    {article.name}
                </h5>
                <p className="card-text">
                    Price {article.price}$
                    <br />
                    Quantity: {item.quantity}
                    <br />
                    Total: {item.quantity * article.price}
                </p>
                <button onClick={ handleRemoveFromCart} className="btn btn-danger">
                    <i className="fa fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
}
