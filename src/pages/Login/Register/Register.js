import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login_img from '../../../images/undraw_authentication_fsn5.svg';

const Register = () => {
    const { handleUserRegistration, signInUsingGoogle } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameInput = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailInput = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault()
        handleUserRegistration(email, password, name);

    }

    //call the google sign in method
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInUsingGoogle();
    }

    return (
        <div className="mt-5">
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="my-5 ">Create Account</h2>
                        <form onSubmit={handleRegister}>
                            <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleNameInput} type="text" placeholder="Your Name" className="form-control" id="inputName" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmailInput} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onBlur={handlePasswordInput} type="password" placeholder="Password" className="form-control" id="inputPassword3" required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-4">Submit</button>
                            <button type="submit" onClick={handleGoogleLogin} className="btn btn-success">Sign in with Google</button>
                        </form>
                        <p className="text-primary mt-2">Already have an account? <Link to="/login">login</Link></p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={login_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;