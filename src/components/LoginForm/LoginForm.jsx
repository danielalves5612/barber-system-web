import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import "./LoginForm.css"

function LoginForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()

        try{
            const response = await api.post("/tokens", {
                email,
                password
            })

            const { token } = response.data

            localStorage.setItem("token", token)

            navigate("/dashboard")

            console.log(response.data)
        }catch(error){
            console.log(error.response?.data || error.message)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Bem-vindo de volta</h2>
            <p className="form-subtitle">Faça login para acessar sua conta</p>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div className="input-wrapper">
                    <Mail className="input-icon" size={20}/>
                    <input value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Digite o seu e-mail" 
                    autoComplete="email" />
                </div>                
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <div className="password-input-wrapper">
                    <Lock className="input-icon" size={20}/>
                    <input value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    type={showPassword ? 'text' : 'password'} 
                    name="password" id="password" 
                    placeholder="Digite a sua senha" autoComplete="current-password"/>
                    <button type="button" className="password-toggle" 
                        onClick={() => setShowPassword(!showPassword)} 
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>
                </div>
            </div>
            <button type="submit" className="button-submit">Entrar</button>
            <p className="auth-link">Não tem uma conta? <Link to="/register">Criar conta</Link></p>
        </form>
    )
}

export default LoginForm