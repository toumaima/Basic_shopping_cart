import React,{useEffect, useState} from 'react';
import {getAll} from"../api/articles.js";
import ArticleItem from "../Components/ArticleItem";
import "./Articles.css";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{ getAll().then(data=>{ setArticles(data) })} ,[articles]);
    
    return (<><div class="row"> {articles.map(article=><div class="col" key={article.id}><ArticleItem article={article} /></div>)}
  </div></>);
}

export default Articles;