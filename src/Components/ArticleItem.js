import React from "react";
import "./ArticleItem.css";

export default function ArticleItem(props){
    const {article} = props;
   

    return (
        <div className="card">
        <img src={article.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">
                {article.name}
            </h5>
            <p className="card-text">
                Price {article.price}$
            </p>
            
            <a href={"/articles/" + article.id} className="btn">Details</a>
        </div>
    </div>
    );
}