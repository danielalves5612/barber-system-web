import AppointmentRow from "../AppointmentRow"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./style.css"

function AppointmentsTable({
    arrayPages,
    handleViewClick,
    handleEditClick,
    handleClickCancel,
    startIndex,
    endIndex,
    filteredAppointments,
    arrayPagesButton,
    currentPage,
    setCurrentPage,
    totalPages

}){
    return (
        <section className="appointments-table-container">
            <div className="appointments-table-header">
                <span>Horário</span>
                <span>Cliente</span>
                <span>Barbeiro</span>
                <span>Serviço</span>
                <span>Status</span>
                <span>Ações</span>
            </div>

            <div className="appointments-table-body">

                {arrayPages.map((appointment) => {
                    return (
                        <AppointmentRow
                            key={appointment.id}
                            appointment={appointment}
                            handleViewClick={handleViewClick}
                            handleEditClick={handleEditClick}
                            handleClickCancel={handleClickCancel}
                        />
                    )
                })}

            </div>

            <div className="appointments-table-footer">
                <div className="appointments-results-info">
                    <p>Mostrando {startIndex + 1} a {Math.min(endIndex, filteredAppointments.length)} de {filteredAppointments.length} agendamentos</p>
                </div>

                <div className="appointments-pagination">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} type="button" className="pagination-button"><ChevronLeft/></button>
                    {arrayPagesButton.map((page) => {
                        return (
                            <button
                                key={page} 
                                className={currentPage === page ? "pagination-button active" : 
                                "pagination-button"} onClick={() => 
                                setCurrentPage(page)}>
                                {page}
                            </button>
                        )
                    })}
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} type="button" className="pagination-button"><ChevronRight/></button>
                </div>
            </div>
        </section>
    )
}

export default AppointmentsTable