import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Cart from "./pages/Cart";
import CartIcon from"./Components/CartIcon";
import store from "./store/store";
import {Provider} from "react-redux";
import SignIn from './pages/Signin'

function App() {
  
  return (
    <>
    <Router>
    <div class="container">
      <nav> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/articles">Articles</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">Cart</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/signin">Sign in</Link>
            </li>
            <CartIcon />
           </ul>

        </div>
      </nav>

      <Routes>
      <Route path="/" element={<div>Home</div>} exact />
      <Route path="/Articles" element={<Articles/>} exact/>
      <Route path="/Articles/:id" element={<Article/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signin" element={<SignIn/>} />
      </Routes>
      </div>
    </Router>
    
    </>
  );
}

const AppWithStore = () =>{
  return <Provider store={store}><App/></Provider>
};
export default AppWithStore;
