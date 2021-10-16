import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h3>Register for a New Account</h3>
                <form onSubmit="" >
                    <input type="email" name=" " id="" placeholder="Your Email" />
                    <br />
                    <input type="Password" name=" " id="" placeholder="Your Password" />
                    <br />
                    <input type="Password" name=" " id="" placeholder=" Re_enter Your Password" />
                    <br />
                    <input type="Submit" name=" " id="" value="Submit" />
                </form>
                <p>Already have an account ? <Link to="/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;