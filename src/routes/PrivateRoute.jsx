import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

function PrivateRoute({ children, allowedRoles }) {
    const token = localStorage.getItem("token")
    const { user } = useContext(AuthContext)

    if (!token) {
        return <Navigate to="/" replace />
    }

    if(!allowedRoles.includes(user?.role)){
        return <Navigate to="/appointments" replace/>
    }

    return children

}

export default PrivateRoute