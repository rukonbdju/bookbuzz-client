import { Link } from "react-router-dom"
import useFirebase from "../../../hooks/useFirebase"

const UserDropdown = ({ user }) => {
    const { logout } = useFirebase()
    return (
        <div className="flex flex-row gap-1 items-center">
            <ul className="menu menu-horizontal">
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ul>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to={"/dashboard/profile"} className="justify-between">Profile</Link>
                    </li>
                    <li><a>Settings</a></li>
                    <li onClick={() => logout()}><a>Logout</a></li>
                </ul>
            </div>
        </div>

    )
}
export default UserDropdown