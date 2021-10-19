import React from 'react';
import useAuth from '../../hooks/useAuth';

//import {  } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    const { signInUsinGoogle } = useAuth();
    return (
        <div>
            hello from login
            <button onClick={signInUsinGoogle}>Login With Goolgle</button>
        </div>
    );
};

export default Login;