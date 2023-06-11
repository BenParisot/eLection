import React from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {

    return (
        <>
            <h1>Welcome to sign-up page</h1>
            <p>sign up with email</p>
            <li><Link to={`/welcome`}>Back to Home</Link></li>

        </>
    )
}

export default SignUp;