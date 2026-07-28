import formatters from "../../utils/formatters"
import PhotoDaniel from "../../assets/images/foto-de-perfil.jpeg"
import { Clock3, Scissors, Eye, Pencil, CircleX } from "lucide-react"
import "./AppointmentRow.css"
import UserAvatar from "../UserAvatar"

function AppointmentRow({
    appointment,
    handleViewClick,
    handleEditClick,
    handleClickCancel
}){
    return (
        <article className="appointment-row">
            <div className="appointment-card-header">
                <div className="appointments-date-time">
                    <Clock3 size={18} />

                    <div className="appointments-date-time-info">
                        <strong>{formatters.formatTime(appointment.hora)}</strong>
                        <span>{formatters.formatDate(appointment.data)}</span>
                    </div>
                </div>

                <span className={`appointments-status ${appointment.status}`}>
                    {formatters.formatStatus(appointment.status)}
                </span>
            </div>

            <div className="appointments-client">
                <UserAvatar nome={appointment.cliente.nome} />

                <div className="appointments-client-info">
                    <span className="appointment-mobile-label">Cliente</span>
                    <strong>{appointment.cliente.nome}</strong>
                    <span>
                        {formatters.formatTelephone(
                            appointment.cliente.telefone
                        )}
                    </span>
                </div>
            </div>

            <div className="appointments-barber-wrapper">
                <span className="appointment-mobile-label">Barbeiro</span>

                <strong className="appointments-barber">
                    {appointment.barbeiro.nome}
                </strong>
            </div>

            <div className="appointments-service">
                <Scissors size={18} />

                <div className="appointments-service-info">
                    <span className="appointment-mobile-label">Serviço</span>
                    <strong>{appointment.service.nome}</strong>
                    <span>
                        {formatters.formatDuration(
                            appointment.service.duracao
                        )}
                    </span>
                </div>
            </div>

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
        </article>
    )
}

export default AppointmentRow