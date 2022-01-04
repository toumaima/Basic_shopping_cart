import React from 'react';
import {
 BrowserRouter as Router, Route, Routes, Link 
} from 'react-router-dom';
import {NavigationItem, Navigation } from './App.stlyle';
import Articles from './pages/Articles';
import { Article } from './pages/Article';
import { Cart } from './pages/Cart';
import { CartIcon} from './Components/CartIcon';
import store from './store/store';
import { Provider } from 'react-redux';
import SignIn from './pages/Signin';

function App() {
  return (
    <Router>
          <>
            <Navigation>
            <Link to="/">
              <NavigationItem >
                Home
              </NavigationItem>
              </Link>
              <Link  to="/articles"><NavigationItem >
                Articles
              </NavigationItem>
              </Link>
              <Link to="/cart">
              <NavigationItem >
                Cart
              </NavigationItem>
              </Link>
              <Link  to="/signin">
              <NavigationItem >
                Sign in
              </NavigationItem>
              </Link>
              <CartIcon />
        </Navigation>
        <Routes>
        <Route path="/" element={<div>Home</div>} exact />
        <Route path="/Articles" element={<Articles/>} exact/>
        <Route path="/Articles/:id" element={<Article/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signin" element={<SignIn/>} />
        </Routes>
        </>
      </Router>
  );
}

function AppWithStore() {
    return <Provider store={store}><App/></Provider>
  }
export default AppWithStore;
