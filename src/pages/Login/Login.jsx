import LoginForm from "../../components/LoginForm/LoginForm"
import { CalendarDays, Users, Scissors } from "lucide-react"
import './Login.css'

function Login(){
    return (
        <div className="login-screen">
            <section className="login-page">
                <div className="login-presentation">
                    <div className="login-text">
                        <div className="login-brand">
                            <h1>Barber <span>System</span></h1>
                            <p>Gestão moderna para a sua barbearia</p>
                        </div>

                        <ul className="login-features">
                            <li>
                                <CalendarDays size={19}/>
                                <span>Agendamentos organizados</span>
                            </li>
                            <li>
                                <Users size={19}/>
                                <span>Gestão de clientes</span>
                            </li>
                            <li>
                                <Scissors size={19}/>
                                <span>Controle de serviços</span>
                            </li>
                        </ul>

                        <span className="login-tagline">
                            Mais organização. Mais tempo. Mais resultados
                        </span>                    
                    </div>
                </div>
                <div className="login-form-area">
                    <LoginForm/>
                </div>
            </section>
        </div>
    )
}

export default Login