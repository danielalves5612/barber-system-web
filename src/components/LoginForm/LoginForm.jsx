import { Link } from "react-router-dom"

function LoginForm(){
    return (
        <form>
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Digite o seu Email" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite a sua senha" />
            <button type="submit">Entrar</button>
            <Link to="/register">Criar conta</Link>
        </form>
    )
}

export default LoginForm