import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import "./LoginForm.css"

function LoginForm(){
    const [showPassword, setShowPassword] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Bem-vindo de volta</h2>
            <p className="form-subtitle">Faça login para acessar sua conta</p>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div className="input-wrapper">
                    <Mail className="input-icon" size={20}/>
                    <input type="email" name="email" id="email" placeholder="Digite o seu e-mail" autoComplete="email" />
                </div>                
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <div className="password-input-wrapper">
                    <Lock className="input-icon" size={20}/>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Digite a sua senha" autoComplete="current-password"/>
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