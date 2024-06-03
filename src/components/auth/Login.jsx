import { Button, Field, Input, Label } from '@headlessui/react'
import loginPhoto from "../../assets/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const navigate = useNavigate();
    const {state} = useLocation();

    const { googleLogin,login,isLoading,errorMessage } = useFirebase(state?.from?.pathname || "/",navigate)
    console.log(isLoading)

    const handleLogin = (e) => {
        e.preventDefault()
        const userData={
            email:e.target.email.value,
            password:e.target.password.value,
        }
        login(userData)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-full' src={loginPhoto} alt="photo" />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-2">Login now!</h1>
                        <div className="w-full max-w-md">
                            <Field>
                                <Label className="text-md font-medium ">Enter your email</Label>
                                {/* <Description className="text-sm/6">Use your real name so people will recognize you.</Description> */}
                                <Input className="border border-blue-500 p-2 w-full rounded focus:outline-blue-600" name="email" type="text" placeholder='Email' required />
                            </Field>
                        </div>
                        <div className="w-full max-w-md">
                            <Field>
                                <Label className="text-md font-medium ">Enter your password</Label>
                                {/* <Description className="text-sm/6">Use your real name so people will recognize you.</Description> */}
                                <Input className="border border-blue-500 p-2 w-full rounded focus:outline-blue-600" name="password" type="password" placeholder='Password' required />
                                <Label className="text-sm/6 font-medium ">Forget password</Label>
                            </Field>
                        </div>
                        <div className="w-full max-w-md">
                            <Button type='submit' className="btn bg-blue-300 hover:bg-blue-400 w-full">Login</Button>
                            <span className="text-sm/6 font-medium ">New user? <Link to={"/register"} className='hover:text-blue-600'>Register now.</Link></span>
                        </div>
                    </form>
                    <div className="divider my-0">OR</div>
                    <div className="w-full max-w-md p-8">
                        <Button onClick={() => googleLogin()} className="btn bg-blue-300 hover:bg-blue-400 w-full">CONTINUE WITH GOOGLE</Button>
                        <Button className="btn bg-blue-300 hover:bg-blue-400 w-full">CONTINUE WITH FACEBOOK</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;