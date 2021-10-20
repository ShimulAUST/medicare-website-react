import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

//import {  } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    const { signInUsinGoogle, setIsLoading, setUser, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsinGoogle()
            .then(result => {
                history.push(redirectURL);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }
    const { signInUsingEmailAndPass, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        signInUsingEmailAndPass(email, password)
            .then((userCredential) => {
                // Signed in 

                history.push(redirectURL);

                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
        console.log(email, password);
    }
    const handleEmailChanged = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChanged = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <section className="container p-5">
                <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-4">
                        <form className="form-container" style={{ backgroundColor: "aquamarine" }} onSubmit={handleLogin}>

                            <div className="form-group">
                                <h4 className="text-center font-weight-bold"> Sign In </h4>

                                <input type="email" onBlur={handleEmailChanged} name="email" className="form-control mt-5 mb-3" id="email" placeholder="email@example.com" />
                            </div>

                            <div className="form-group">
                                <input type="password" onBlur={handlePasswordChanged} className="form-control mb-5" name="password" id="password" placeholder="Enter your Password" />

                            </div>

                            <div className="text-danger mb-2">{error}</div>
                            <button type="submit" name="login" className="btn btn-success btn-block">Submit</button>
                        </form>
                        <p>New user? <Link to="/register">Sign Up</Link></p>
                    </section>
                </section>
            </section>

            <button className="btn btn-warning" onClick={handleGoogleLogin}>Login With Goolgle</button>
        </div>
    );
};

export default Login;