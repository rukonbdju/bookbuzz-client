import { Button, Field, Label, Input } from "@headlessui/react"
import loginPhoto from "../../assets/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import useFirebase from "../../hooks/useFirebase"

const Register = () => {
    const [isMatchPassword, setIsMatchPassword] = useState(true)

    const navigate = useNavigate();
    const { state } = useLocation()

    const { register,isLoading,errorMessage } = useFirebase(state?.from?.pathname || "/", navigate)


    const handleRegister = (e) => {
        e.preventDefault()
        const userData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirmPassword.value
        }
        if (userData.confirmPassword === userData.password) {
            setIsMatchPassword(true)
            register(userData)
        }
        else {
            setIsMatchPassword(false)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <img className='w-full' src={loginPhoto} alt="photo" />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-2">Register now!</h1>
                        <div className="w-full max-w-md">
                            <Field>
                                <Label className="text-md font-medium ">Enter your name</Label>
                                {/* <Description className="text-sm/6">Use your real name so people will recognize you.</Description> */}
                                <Input className="border border-blue-500 p-2 w-full rounded focus:outline-blue-600" name="name" type="text" placeholder='Email' required />
                            </Field>
                        </div>
                        <div className="w-full max-w-md">
                            <Field>
                                <Label className="text-md font-medium ">Enter your email</Label>
                                {/* <Description className="text-sm/6">Use your real name so people will recognize you.</Description> */}
                                <Input className="border border-blue-500 p-2 w-full rounded focus:outline-blue-600" name="email" type="email" placeholder='Email' required />
                            </Field>
                        </div>
                        <div className="w-full max-w-md">
                            <Field>
                                <Label className="text-md font-medium ">Enter your password</Label>
                                {/* <Description className="text-sm/6">Use your real name so people will recognize you.</Description> */}
                                <Input className="border border-blue-500 p-2 w-full rounded focus:outline-blue-600" name="password" type="password" placeholder='Password' required />
                            </Field>
                        </div>
                        <div className="w-full max-w-md">
                            <Field>
                                <Label className="text-md font-medium ">Confirm your password</Label>
                                {/* <Description className="text-sm/6">Use your real name so people will recognize you.</Description> */}
                                <Input className="border border-blue-500 p-2 w-full rounded focus:outline-blue-600" name="confirmPassword" type="password" placeholder='Password' required />
                                {isMatchPassword || <Label className="text-sm text-red-700 font-medium ">Password did not match</Label>}
                            </Field>
                        </div>
                        <div className="w-full max-w-md">
                            <Button type="submit" className="btn bg-blue-300 hover:bg-blue-400 w-full">Register {isLoading && <span className="loading loading-spinner loading-md"></span>}</Button>
                            <span className="text-sm/6 font-medium ">Have an account? <Link to={"/login"} className='hover:text-blue-600'>Login now.</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register