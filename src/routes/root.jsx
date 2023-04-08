const Root = () => {
    return (
        <>
            <div id="sidebar">
                <h1>App Navigation</h1>
                <ul>
                    <li><a href={`/login/Login.jsx`}>Login</a></li>
                    <li><a href={`/login/Sign-Up.jsx`}>Sign-Up</a></li>
                    <li><a href={`/login/Landing.jsx`}>Back to Home</a></li>
                </ul>
            </div>
        </>
    )
}

export default Root;