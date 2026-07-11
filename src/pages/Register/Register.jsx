import RegisterForm from "../../components/RegisterForm/RegisterForm"
import AuthLayout from "../../layouts/AuthLayout/AuthLayout"

function Register(){
    return (
        <AuthLayout>
            <RegisterForm/>
        </AuthLayout>
    )
}

export default Register