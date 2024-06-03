import { useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/auth";

const useFirebase = (previousLocation, navigate) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState({})
    const googleProvider = new GoogleAuthProvider();

    //google sign in
    const googleLogin = async () => {
        try {
            setIsLoading(true)
            await signInWithPopup(auth, googleProvider)
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
            await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            await updateProfile(auth.currentUser, {
                displayName: userData.name
            })
            navigate(previousLocation, { replace: true })

        } catch (error) {
            setErrorMessage(error.message)
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
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user)
                setIsLoading(false)
            }

        })

    }, [auth])

    return { user, isLoading, errorMessage, login, register, googleLogin, logout, navigator }

}

export default useFirebase;