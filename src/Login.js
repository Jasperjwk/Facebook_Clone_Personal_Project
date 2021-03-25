import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';


 function Login() {
     //dispatch is like a gun that we can use to shoot into data and it allows us 
     //to shoot different actions
     const [state, dispatch] = useStateValue();

    const signIn = () => {
        //Sign in...
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                // It pushes into the data layer so now we have the user inside of the data layer
                type: actionTypes.SET_USER,
                user: result.user,
            })

            console.log(result)
        }).catch(error => alert(error.message));
        
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                src = "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                alt = ""               
                />
                <img
                src = "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt = ""               
                />
            </div>
            <Button type = "submit" onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login;
