import {createStore} from "redux";
import { cartReducer } from "./reducers";

const initialState = {
    cart: [
        {
            article: {
                "id": 0,
                "name": "default article",
                "price": 100,
                "image": "/imgs/1.jpg",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            quantity: 5
        }
    ]
};


const store = createStore(cartReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;