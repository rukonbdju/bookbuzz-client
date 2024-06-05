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
import SingleBookPage from "../pages/SingleBookPage/SingleBookPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../components/Dashboard/Profile/Profile";
import Books from "../components/Dashboard/Books/Books";
import AddBook from "../components/Dashboard/AddBook/AddBook";
import EditBook from "../components/Dashboard/EditBook/EditBook";
import UpdateProfile from "../components/Dashboard/Profile/UpdateProfile";

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
                path:"books/:id",
                element:<SingleBookPage></SingleBookPage>
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
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children:[
            {
                path:'',
                element: <Profile></Profile>
            },
            {
                path:'profile',
                element: <Profile></Profile>
            },
            {
                path:'editProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path:'books',
                element: <Books></Books>
            },
            {
                path:'books/add',
                element: <AddBook></AddBook>
            },
            {
                path:'books/:id',
                element: <EditBook></EditBook>
            },
        ]
    },
    
])
export default router;