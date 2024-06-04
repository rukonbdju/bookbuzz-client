const Profile = () => {
    return (
        <div className="w-4/5 mx-auto my-10 min-h-screen">
            <div className="grid grid-cols-2 gap-4">
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl">Basic Info</h1>
                        <button className="btn btn-xs">Edit</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p>Name: Rukon</p>
                        <p>Birth: 5 dec 2000</p>
                        <p>Occupation: Student</p>
                        <p>Gander: Male</p>
                    </div>
                </section>
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl">Contact Info</h1>
                        <button className="btn btn-xs">Edit</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p>Email: ruo@if.com</p>
                        <p>Phone: 02384822384</p>
                    </div>
                </section>
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl">Address</h1>
                        <button className="btn btn-xs">Edit</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p>Home: Not Set</p>
                        <p>Work: not set</p>
                    </div>
                </section>
                <section className="border-2 bg-blue-200 p-5 rounded-md">
                    <h1>Security</h1>
                    <div className="divider"></div>
                    <div>
                        <p>Password: 1111111</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Profile