import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import  {getById}  from "../api/articles"
import {addToCart} from "../store/actions/action";
import {connect} from "react-redux"

const Article =(props) => {
    const [article, setAticle]= useState({})
    const [loading, setLoading]= useState(true);
    const [quantity, setQuantity]= useState(0);

    const { id } = useParams();
   

    useEffect(()=>{
            getById(parseInt(id)).then((article)=>{setAticle(article)}).catch(err => alert(err)); setLoading(false);}
    
    , [id]);

    const addtToCart = (article) => { 
        props.addToCart(article, quantity);
    }

    const handleOnClick= (event) =>
            { 
            const value= event.target.value; 
            if (value < 0)
                return ;
                
            setQuantity(value);
            }
    if(loading)
        return 'Loading ..';
    return <>
    <div style={{display: "block"}}>
        <>
        <img style={{ border: "solid 2px rgb(31, 84, 116)",
  borderRadius: "4px",
  boxShadow: "5px 5px 5px #aaaaaa",
  marginRight: "5px",
  textAlign: "center",
  justifyContent: "center",
  flexWrap: "wrap"}}src={article.image} width={'25%'} alt=""/>
        </>
        <div className="col-6">
        <h1>{article.name}</h1>
            <p>Price: {article.price}euros</p>
            <p>{article.description}</p>
            <br/><br/>
            <input type="number" value={quantity}  onChange={handleOnClick}  />
            
            
            <p>Total: {quantity * article.price} euros</p>
            <button className="btn btn-primary" onClick={()=>{addtToCart(article)}}>
                Add to Cart
            </button>
        </div>
    </div>
</>
}


const mapDispatchToProps = (dispatch) => {
   return {
       addToCart: (article, quantity) => dispatch(addToCart(article, parseInt(quantity))),
   };
}

// mapStateToProps is null here
export default connect(null, mapDispatchToProps)(Article);

