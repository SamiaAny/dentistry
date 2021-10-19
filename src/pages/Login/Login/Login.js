import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login_img from '../../../images/undraw_authentication_fsn5.svg';

const Login = () => {
    const { signInUsingGoogle, handleUserLogin, handlePasswordReset} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmailInput = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordInput = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    
    //call the google sign in method
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInUsingGoogle();
    }

    //call the login method using email and password
    const handleLogIn = (e) => {
        e.preventDefault();
        handleUserLogin(email, password);
    }

    //forget password
    const handleForgetPassword = () => {
        handlePasswordReset(email);
    }
    return (
        <div className="mt-5">
            <div className="container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="my-5 ">Please Login</h2>
                        <form onSubmit={handleLogIn}>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input onBlur={handleEmailInput} type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input onBlur={handlePasswordInput} type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                    <div className="text-danger">
                                        <label onClick={handleForgetPassword} style={{cursor:'pointer'}}>
                                        Forget password?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* login button */}
                            <button type="submit" className="btn btn-primary me-4">Log in</button>
                            {/* google sign in button */}
                            <button onClick={handleGoogleLogin} type="submit" className="btn btn-success">Sign in with Google</button>
                        </form>
                        <p className="text-primary mt-2" >New user? <Link to="/register">create account</Link></p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={login_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;