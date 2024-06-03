import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout/RootLayout";
import ErrorPage from "../components/Common/ErrorPage";
import Home from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import BlogPage from "../pages/BlogPage/BlogPage";
import BookPage from "../pages/BookPage/BookPage";
import HomePage from "../pages/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "",
                element: <HomePage></HomePage>
            },
            {
                path: "home",
                element: <HomePage></HomePage>
            },
            {
                path: "books",
                element: <BookPage></BookPage>
            },
            {
                path: "blogs",
                element: <PrivateRoute><BlogPage></BlogPage></PrivateRoute>
            },
            {
                path: "about",
                element: <About></About>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])
export default router;