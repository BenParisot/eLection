import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <>
            <h1>Landing page</h1>
            <Link to={`/sign-up`}><p>Sign-Up</p></Link>
            <Link to={`/login`}><p>Login</p></Link>
        </>
    )
}

export default Landing;