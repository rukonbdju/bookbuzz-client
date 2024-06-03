import { Children, createContext } from "react"
import useFirebase from "../hooks/useFirebase"
export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const { user } = useFirebase()
    return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProvider;