import { useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/auth";
import axios from "axios";

const useFirebase = (previousLocation, navigate) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState('true')
    const [errorMessage, setErrorMessage] = useState({})
    const [message,setMessage]=useState(null)
    const googleProvider = new GoogleAuthProvider();

    //google sign in
    const googleLogin = async () => {
        try {
            setIsLoading(true)
            const {user} = await signInWithPopup(auth, googleProvider)
            const userInfo = {
                name: user.displayName,
                email: user.email,
                password: user.password,
                uid: user?.uid,
                photo_URL: user?.photoURL,
                occupation: "",
                phone: "",
                homeAddress: "",
                workAddress: "",
                dob: "",
                gender: "",
                created_At: user?.metadata.creationTime,
                updated_At: ""
            }
            const response = await axios.post("https://bookbuzz-server.vercel.app/api/users", userInfo)
            setMessage(response.data)
            navigate(previousLocation, { replace: true })
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    //sign in with email and password
    const login = async (userData) => {
        try {
            setIsLoading(true)
            await signInWithEmailAndPassword(auth, userData.email, userData.password)
            navigate(previousLocation, { replace: true })
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    //create a new user
    const register = async (userData) => {
        try {
            setIsLoading(true)
            const result = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            await updateProfile(auth.currentUser, {
                displayName: userData.name
            })
            const userInfo = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                uid: result?.user?.uid,
                photo_URL: result?.user?.photoURL,
                occupation: "",
                phone: "",
                homeAddress: "",
                workAddress: "",
                dob: "",
                gender: "",
                created_At: result?.user?.metadata.creationTime,
                updated_At: ""
            }
            const response = await axios.post("https://bookbuzz-server.vercel.app/api/users", userInfo)
            setMessage(response.data)
            navigate(previousLocation, { replace: true })

        } catch (error) {
            setErrorMessage(error.message)
        } finally {

            setIsLoading(false)
        }
    }

    //update user
    const updateUser = async (userInfo) => {
        try {
            setIsLoading(true)
            const { _id, ...userData } = userInfo
            await updateProfile(auth.currentUser, {
                displayName: userInfo.name,
            })
            const response = await axios.post(`https://bookbuzz-server.vercel.app/api/users/${userInfo.uid}`, userData)
            setMessage(response.data)

        } catch (err) {
            setErrorMessage(err.message)
        } finally {
            setIsLoading(false)
        }

    }

    //logout
    const logout = async () => {
        try {
            setIsLoading(true)
            await signOut(auth)
            window.location = "/"
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    //get logged in user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user)
                setIsLoading(false)
            }

        })
        
    }, [auth,user])

    return { user, isLoading, errorMessage,message, login, register, googleLogin, logout, updateUser, navigator }

}

export default useFirebase;