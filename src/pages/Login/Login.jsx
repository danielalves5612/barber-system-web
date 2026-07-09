import LoginForm from "../../components/LoginForm/LoginForm"

function Login(){
    return (
        <section>
            <div>
                <h1>Barber System</h1>
                <p>Gestão Moderna para a sua Barbearia</p>
            </div>
            <div>
                <LoginForm/>
            </div>
        </section>
    )
}

export default Login