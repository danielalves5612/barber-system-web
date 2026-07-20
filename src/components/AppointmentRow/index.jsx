import formatters from "../../utils/formatters"
import PhotoDaniel from "../../assets/images/foto-de-perfil.jpeg"
import { Clock3, Scissors, Eye, Pencil, CircleX } from "lucide-react"
import "./style.css"

function AppointmentRow({
    appointment,
    handleViewClick,
    handleEditClick,
    handleClickCancel
}){
    return (
        <div className="appointment-row">
            <div className="appointments-date-time">
                <Clock3 size={18} />

                <div className="appointments-date-time-info">
                    <strong>{formatters.formatTime(appointment.hora)}</strong>
                    <span>{formatters.formatDate(appointment.data)}</span>
                </div>
            </div>

            <div className="appointments-client">
                <img
                    src={PhotoDaniel}
                    alt="Foto do cliente Daniel"
                    className="appointments-client-avatar"
                />

                <div className="appointments-client-info">
                    <strong>{appointment.cliente.nome}</strong>
                    <span>{formatters.formatTelephone(appointment.cliente.telefone)}</span>
                </div>
            </div>

            <span className="appointments-barber">{appointment.barbeiro.nome}</span>

            <div className="appointments-service">
                <Scissors size={18} />

                <div className="appointments-service-info">
                    <strong>{appointment.service.nome}</strong>
                    <span>{formatters.formatDuration(appointment.service.duracao)}</span>
                </div>
            </div>

            <span className={`appointments-status ${appointment.status}`}>
                {formatters.formatStatus(appointment.status)}
            </span>

            <div className="appointments-actions">
                <button
                    onClick={() => handleViewClick(appointment)}
                    type="button"
                    title="Clique para visualizar"
                    className="appointments-action-button"
                    aria-label="Visualizar agendamento"
                >
                    <Eye size={17} />
                </button>

                <button
                    onClick={() => handleEditClick(appointment)}
                    type="button"
                    title="Clique para editar"
                    className="appointments-action-button"
                    aria-label="Editar agendamento"
                >
                    <Pencil size={17} />
                </button>

                <button
                    onClick={() => handleClickCancel(appointment)}
                    type="button"
                    title="Clique para cancelar"
                    className="appointments-action-button danger"
                    aria-label="Cancelar agendamento"
                >
                    <CircleX size={17} />
                </button>
            </div>
        </div>
    ) 
}

export default AppointmentRow