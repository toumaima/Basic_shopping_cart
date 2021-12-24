
import Articles from "./articles.json";

 export const getAll= () =>{
    return Promise.resolve(Articles);
};

export const getById = (id) =>{
    const article = Articles.find(item => item.id === id);

    return Promise.resolve(article);
};

