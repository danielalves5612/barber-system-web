import "./style.css"

function UserAvatar({ nome }){

    const nomeCompleto = nome.split(" ")

    const primeiroNome = nomeCompleto.at(0)
    const ultimoSobrenome = nomeCompleto.at(-1)

    const primeiraLetraNome = primeiroNome[0].toUpperCase()
    const primeiraLetraSobrenome = ultimoSobrenome[0].toUpperCase()

    const duasIniciais = primeiraLetraNome + primeiraLetraSobrenome

    return (
        <div className="user-avatar">{duasIniciais}</div>
    )
}

export default UserAvatar