import React, { useState, useEffect} from 'react';
import base64 from "base-64";
import superagent  from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
export const ContextLogin = React.createContext();

function LoginContext(props){
 
//api url from server part.    
const API="https://api-auth-main.herokuapp.com"; 
// flag   
const [LoggedIn, setLoggedIn]=useState(false);

const [user,setUser]=useState({username:"", capabilities:[]});

//capabiliy
user.capabilities=['read','create']
//login function

const loginFunction=async (username, password)=>{
   // flage equal true
    try {
        const res= await superagent.post(`${API}/signin`).set('authorization',`Basic ${base64.encode(`${username}:${password}`)}`);
        validateMytoken(res.body.token);
    
    } catch (error) {
        // console.log(error);
    }
}

const logoutFunction=()=>{
    //flage equal false
    setLoggedIn(false);
    setUser({});
    cookie.remove('token');
    
}

const validateMytoken=(token)=>{
    if (token) {
        const user= jwt.decode(token);
        console.log(user);
        setLoggedIn(true);
        setUser(user);
        cookie.save('token', token);

    }
    else{
        setLoggedIn(false);
        setUser({});
    }
}

useEffect(()=>{
  //check the token
  const myToken=cookie.load('token');
  validateMytoken(myToken);

},[])

// capability of user
const can=(capability)=>{
    return user?.capabilities?.includes(capability);
}

const state={
LoggedIn:LoggedIn,
loginFunction:loginFunction,
logoutFunction:logoutFunction,
user:user,
can:can

}

return(
    <ContextLogin.Provider value={state}>
        {props.children}
    </ContextLogin.Provider>
)
}

export default LoginContext;