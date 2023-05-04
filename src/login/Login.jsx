import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <h1>Welcome to login page</h1>
            <p><Link to={`/dashboard`}>login with email</Link></p>
            <li><Link to={`/welcome`}>Back to Home</Link></li>

        </>
    )
}

export default Login;