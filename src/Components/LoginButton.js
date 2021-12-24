import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton= ()=>{

const {loginWithRedirect, isAuthenticated}= useAuth0();


    return !isAuthenticated && <>
    <h2> You can log in in a very secure way</h2><button onClick={()=>loginWithRedirect()}>Log in </button></>;
}

export default LoginButton;