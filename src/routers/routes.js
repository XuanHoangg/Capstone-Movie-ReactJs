import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import RootLayout from "../components/RootLayout";
import Home from "../modules/Home";
import Movie from "../modules/Movie";
import NotFound from "../components/NotFound";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            { index: true, element: <Home /> },
            { path: "/movie/:movieId", element: <Movie /> },
        ]
    },
    { path: "*", element: <NotFound /> },

]);
export default routes;