function nameUtils(nome){
    const nomeFormatado = nome.split(" ")
    const primeiroNome = nomeFormatado.shift()
    const ultimoNome = nomeFormatado.pop()

    return `${primeiroNome} ${ultimoNome}`
}

export default nameUtils