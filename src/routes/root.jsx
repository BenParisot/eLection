const Root = () => {
    return (
        <>
            <div id="sidebar">
                <h1>App Navigation</h1>
                <ul>
                    <li><a href={`login`}>Login</a></li>
                    <li><a href={`sign-up`}>Sign-Up</a></li>
                    <li><a href={`welcome`}>Back to Home</a></li>
                </ul>
            </div>
        </>
    )
}

export default Root