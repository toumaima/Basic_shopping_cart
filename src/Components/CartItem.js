import React from "react";
//import {connect} from "react-redux";
//import {deleteFromCart} from "../store/actions/action";

export const CartItem= (props) =>{
    const {item} = props;
    const {article} = item;

    return ( 

        <div className="card">
            <img src={article.image} className="card-img-top" alt="..." />
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
                <a href="#" className="btn btn-danger">
                    <i className="fa fa-trash"></i> Delete
                </a>
            </div>
        </div>
    );
}

//const mapDispatchToProps = (dispatch) => {
  //  return {
    //    deleteFromCart: (index) => dispatch(deleteFromCart(index)),
   // };
// }

 //export default connect(null, mapDispatchToProps)(CartItem);
