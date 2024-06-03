import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout/RootLayout";
import ErrorPage from "../components/Common/ErrorPage";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const router=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout></RootLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"home",
                element:<Home></Home>
            },
            {
                path:"books",
                element:<Books></Books>
            },
            {
                path:"blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"about",
                element:<About></About>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    }
])
export default router;