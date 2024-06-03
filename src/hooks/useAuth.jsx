import { useContext } from "react"
import useFirebase from "./useFirebase"
import { UserContext } from "../context/UserProvider"

const useAuth=()=>{
    const authData=useContext(UserContext)
    return authData;
}
export default useAuth