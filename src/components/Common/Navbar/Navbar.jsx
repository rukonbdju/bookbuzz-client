import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import useFirebase from "../../../hooks/useFirebase";
import { useContext } from "react";
import { UserContext } from "../../../context/UserProvider";

const Navbar = () => {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <div className="navbar bg-base-100 sticky z-40 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/books"}>books</Link></li>
                        <li><Link to={"/blogs"}>Blogs</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                    </ul>
                </div>
                <a className="text-xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Bookbuzz</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/books"}>books</Link></li>
                    <li><Link to={"/blogs"}>Blogs</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                {user? <UserDropdown user={user}></UserDropdown> :
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/login"}>Login</Link></li>
                    </ul>}


            </div>
        </div>
    )
}

export default Navbar;