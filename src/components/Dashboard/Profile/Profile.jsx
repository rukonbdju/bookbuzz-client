import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import axios from "axios"

const Profile = () => {
    const [userInfo,setUserInfo]=useState(null)
    const {user:{uid}}=useAuth()
    console.log(userInfo)
    useEffect(()=>{
        axios.get(`https://bookbuzz-server.vercel.app/api/users/${uid}`)
        .then(res=>setUserInfo(res.data))
        .catch(err=>console.log(err))
    },[uid])
    return (
        <div className="w-4/5 mx-auto my-10 min-h-screen">
            <div className="grid grid-cols-2 gap-4">
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                        <h1 className="text-2xl">Basic Info</h1>
                    <div className="divider"></div>
                    <div>
                        <p>Name: {userInfo?.name}</p>
                        <p>Birth: {userInfo?.dob ||"Not set"}</p>
                        <p>Occupation: {userInfo?.occupation ||"Not set"}</p>
                        <p>Gender: {userInfo?.gender ||"Not set"}</p>
                    </div>
                </section>
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                        <h1 className="text-2xl">Contact Info</h1>
                    <div className="divider"></div>
                    <div>
                        <p>Email: {userInfo?.email}</p>
                        <p>Phone: {userInfo?.phone || "Not set"}</p>
                    </div>
                </section>
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                        <h1 className="text-2xl">Address</h1>
                    <div className="divider"></div>
                    <div>
                        <p>Home: {userInfo?.homeAddress ||"Not set"}</p>
                        <p>Work: {userInfo?.workAddress ||"Not set"}</p>
                    </div>
                </section>
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                    <h1>Security</h1>
                    <div className="divider"></div>
                    <div>
                        <p>Password: {userInfo?.password ||"Not set"}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Profile