import { Children, createContext } from "react"
import useFirebase from "../hooks/useFirebase"
export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const value = useFirebase()
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;