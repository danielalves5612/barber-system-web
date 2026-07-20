function formatDate(data){
    const [ano, mes, dia] = data.split('-')
    return `${dia}/${mes}/${ano}`
}

function formatTime(valueHora){
    const [hora, minuto, segundo] = valueHora.split(':')
    return `${hora}:${minuto}`
}

function formatStatus(status){
    return status.slice(0, 1).toUpperCase() + status.slice(1)
}

function formatTelephone(telefone){
    return `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7)}`
}

function formatDuration(duracao){
    return `${duracao} minutos`
}

export default {
    formatDate,
    formatTime,
    formatStatus,
    formatTelephone,
    formatDuration
}