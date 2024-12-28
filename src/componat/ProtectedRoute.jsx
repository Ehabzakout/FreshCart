import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "../context/User.context"
import { jwtDecode } from "jwt-decode"


export default function ProtectedRoute({ children }) {
    let { token } = useContext(userContext)

    if (token) {
        let { id, exp } = jwtDecode(token)
        if (id) {
            return children
        }
    }
    else { return <Navigate to="/Auth/Login" /> }
}