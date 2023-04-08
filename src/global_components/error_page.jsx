import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Whoopsie!</h1>
            <p>Looks like we messed up. Here's some details about the errror:</p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    )
}

export default ErrorPage;