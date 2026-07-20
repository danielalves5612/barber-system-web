import "./style.css"

function AppointmentFormModal({
    editingAppointment,
    data,
    setData,
    hora,
    setHora,
    clienteId,
    setClienteId,
    barbeiroId,
    setBarbeiroId,
    serviceId,
    setServiceId,
    status,
    setStatus,
    users,
    services,
    handleCloseModal,
    handleSubmit
}){
 return (
        <div onClick={() => handleCloseModal()} className="modal-overlay">
            <div onClick={(event) => event.stopPropagation()} className="appointment-modal">
                <div className="appointment-modal-header">
                    <h1>{editingAppointment ? "Editar agendamento" : "Criar agendamento"}</h1>
                    <p>{editingAppointment ? "Edite o seu agendamento abaixo" : "Crie agora mesmo o seu agendamento"}</p>
                </div>

                <div className="appointment-modal-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="data">Data</label>
                        <input value={data} onChange={(event) => setData(event.target.value)} type="date" name="data" id="data" />

                        <label htmlFor="hora">Horário</label>
                        <input value={hora} onChange={(event) => setHora(event.target.value)} type="time" name="hora" id="hora" />

                        <label htmlFor="cliente">Cliente</label>
                        <select value={clienteId} onChange={(event) => setClienteId(event.target.value)} name="cliente" id="cliente">
                            <option value="">Selecione um cliente</option>
                            {users.map((user) => {
                                if(user.role === "cliente"){
                                    return (
                                        <option key={user.id} value={user.id}>{user.nome}</option>
                                    )
                                }
                            })}
                        </select>
                        
                        <label htmlFor="barbeiro">Barbeiro</label>
                        <select value={barbeiroId} onChange={(event) => setBarbeiroId(event.target.value)} name="barbeiro" id="barbeiro">
                            <option value="">Selecione um barbeiro</option>
                            {users.map((user) => {
                                if(user.role === 'barbeiro'){
                                    return (
                                        <option key={user.id} value={user.id}>{user.nome}</option>
                                    )
                                }
                            })}
                        </select>
                        
                        <label htmlFor="servico">Serviço</label>
                        <select value={serviceId} onChange={(event) => setServiceId(event.target.value)} name="servico" id="servico">
                            <option value="">Selecione um serviço</option>
                            {services.map((service) => {
                                return (
                                    <option key={service.id} value={service.id}>{service.nome}</option>
                                )
                            })}
                        </select>

                        {editingAppointment && (
                            <div>
                                <label htmlFor="status">Status</label>
                                <select value={status} onChange={(event) => setStatus(event.target.value)} name="status" id="status">
                                    <option value="concluido">Concluído</option>
                                    <option value="confirmado">Confirmado</option>
                                    <option value="agendado">Agendado</option>
                                    <option value="cancelado">Cancelado</option>
                                </select>
                            </div>
                        )}

                        <div className="appointment-modal-footer">
                            <button type="button" className="modal-btn-cancel" onClick={() => handleCloseModal()}>Cancelar</button>
                            <button 
                                type="submit" 
                                className="modal-btn-submit">
                                {editingAppointment ? "Salvar alterações" : "Criar agendamento"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentFormModal