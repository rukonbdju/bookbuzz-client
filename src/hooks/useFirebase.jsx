import { useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState({})
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = async () => {
        try {
            setIsLoading(true)
            const response = await signInWithPopup(auth, googleProvider)
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (userData) => {
        try {
            setIsLoading(true)
            const result = await signInWithEmailAndPassword(auth, userData.email, userData.password)
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const register = async (userData) => {
        try {
            setIsLoading(true)
            await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            await updateProfile(auth.currentUser, {
                displayName: userData.name
            })

        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const logout = async () => {
        try {
            setIsLoading(true)
            await signOut(auth)
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
        setIsLoading(false)
    }, [auth])

    return { user, isLoading, errorMessage, login, register, googleLogin, logout }

}

export default useFirebase;