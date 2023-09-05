import { useRouteError } from "react-router-dom";
import Header from "./shared/Header/Header.component.jsx";

export default function ErrorPage()
{
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <Header/>
            <h1>Error</h1>
            <p> { error.statusText || error.message } </p>
        </div>
    );
}