import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import "./RegisterForm.css"

function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Criar conta</h2>
            <p className="form-subtitle">Crie sua conta e comece a organizar sua barbearia</p>
            <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <div className="input-wrapper">
                    <User className="input-icon" size={20}/>
                    <input type="text" name="name" id="name" placeholder="Digite o seu nome" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <div className="input-wrapper">
                        <Mail className="input-icon" size={20}/>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite o seu e-mail" 
                            autoComplete="email" 
                        />
                    </div>    
                    
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <div className="input-wrapper">
                        <Phone className="input-icon" size={20} />
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="(00) 00000-0000"
                            autoComplete="tel"
                        />
                    </div> 
                </div>   
            </div>
                    
            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <div className="password-input-wrapper">
                    <Lock className="input-icon" size={20}/>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        name="password" id="password" 
                        placeholder="Digite a sua senha" 
                        autoComplete="new-password"
                    />
                    <button 
                        type="button" 
                        className="password-toggle" 
                        onClick={() => setShowPassword(!showPassword)} 
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>
                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password-confirm">Confirmar senha</label>
                <div className="password-input-wrapper">
                    <Lock className="input-icon" size={20}/>
                    <input 
                        type={showPasswordConfirm ? 'text' : 'password'} 
                        name="passwordConfirm" id="passwordConfirm" 
                        placeholder="Confirme a sua senha" 
                        autoComplete="new-password"
                    />
                    <button 
                        type="button" 
                        className="password-toggle" 
                        onClick={() => setShowPasswordConfirm(!showPasswordConfirm)} 
                        aria-label={showPasswordConfirm ? 'Ocultar senha' : 'Mostrar senha'}>
                        {showPasswordConfirm ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>
                </div>
            </div>
                
            <button type="submit" className="button-submit">Criar Conta</button>
            <p className="auth-link">Já têm uma conta? <Link to="/">Faça login</Link></p>
        </form>
    )
}

export default RegisterForm