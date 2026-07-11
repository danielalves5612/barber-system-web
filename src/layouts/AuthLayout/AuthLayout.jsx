import { CalendarDays, Users, Scissors } from "lucide-react"
import './AuthLayout.css'

function AuthLayout({ children }) {
    return (
        <div className="auth-screen">
            <section className="auth-page">
                <div className="auth-presentation">
                    <div className="auth-text">
                        <div className="auth-brand">
                            <h1>Barber <span>System</span></h1>
                            <p>Gestão moderna para a sua barbearia</p>
                        </div>

                        <ul className="auth-features">
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

                        <span className="auth-tagline">
                            Mais organização.
                            <br /> 
                            Mais tempo.
                            <br /> 
                            Mais resultados.
                        </span>                  
                    </div>
                </div>

                <div className="auth-form-area">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default AuthLayout