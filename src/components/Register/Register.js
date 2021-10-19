import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
    const { signUpUsingEmailAndPass, setError, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 Charecters long..');
            return;
        }
        signUpUsingEmailAndPass(email, password)
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
                        <form className="form-container" style={{ backgroundColor: "aquamarine" }} onSubmit={handleRegistration}>

                            <div className="form-group">
                                <h4 className="text-center font-weight-bold"> Sign Up </h4>

                                <input type="email" onBlur={handleEmailChanged} name="email" className="form-control mt-5 mb-3" id="email" placeholder="email@example.com" />
                            </div>

                            <div className="form-group">
                                <input type="password" onBlur={handlePasswordChanged} className="form-control mb-5" name="password" id="password" placeholder="Enter your Password" />

                            </div>
                            <div className="text-danger mb-2">{error}</div>
                            <button type="submit" name="login" className="btn btn-success btn-block">Submit</button>
                        </form>
                        <p>Already a user? <Link to="/login">Sign In</Link></p>
                    </section>
                </section>
            </section>

        </div>
    );
};

export default Register;