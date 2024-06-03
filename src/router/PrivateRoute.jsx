import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    console.log(user, isLoading)
    const location = useLocation()

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }


};

export default PrivateRoute;