import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

function AuthProvider({ children }){

    const userStorage = localStorage.getItem("user")
    const [user, setUser] = useState(userStorage ? JSON.parse(userStorage) : null)

    const navigate = useNavigate()
    
    function handleClickLogout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null)

        navigate("/")
    }

    return (
        <AuthContext.Provider value={{user, setUser, handleClickLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider