import formatters from "../../utils/formatters"
import "./style.css"

function AppointmentViewModal({ viewAppointment, setViewAppointment}){
    return (
        <div onClick={() => setViewAppointment(null)} className="modal-overlay">
            <div onClick={(event) => event.stopPropagation()} className="appointment-view-modal">

                <div className="appointment-view-header">
                    <h1>Detalhes do agendamento</h1>
                    <p>Confira todas as informações deste agendamento</p>
                </div>

                <div className="appointment-view-body">

                    <div className="appointment-view-item">
                        <span>Cliente</span>
                        <strong>{viewAppointment.cliente.nome}</strong>
                        <small>{formatters.formatTelephone(viewAppointment.cliente.telefone)}</small>
                    </div>

                    <div className="appointment-view-item">
                        <span>Barbeiro</span>
                        <strong>{viewAppointment.barbeiro.nome}</strong>
                    </div>

                    <div className="appointment-view-item">
                        <span>Serviço</span>
                        <strong>{viewAppointment.service.nome}</strong>
                        <small>{formatters.formatDuration(viewAppointment.service.duracao)}</small>
                    </div>

                    <div className="appointment-view-item">
                        <span>Data</span>
                        <strong>{formatters.formatDate(viewAppointment.data)}</strong>
                    </div>

                    <div className="appointment-view-item">
                        <span>Horário</span>
                        <strong>{formatters.formatTime(viewAppointment.hora)}</strong>
                    </div>

                    <div className="appointment-view-item">
                        <span>Status</span>
                        <strong>{formatters.formatStatus(viewAppointment.status)}</strong>
                    </div>

                </div>

                <div className="appointment-view-footer">
                    <button
                        type="button"
                        onClick={() => setViewAppointment(null)}
                    >
                        Fechar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AppointmentViewModal