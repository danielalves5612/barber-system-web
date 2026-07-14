import { Plus, Search, Clock3, Scissors, Eye, Pencil, CircleX, ChevronLeft, ChevronRight } from "lucide-react"
import PhotoDaniel from "../../assets/images/foto-de-perfil.jpeg"
import "./Appointments.css"

function Appointments(){
    return (
        <section className="appointments-page">

            <section className="appointments-header">

                <div className="appointments-title">
                    <h1>Agendamentos</h1>
                    <p>Gerencie todos os agendamentos da barbearia</p>
                </div>

                <button className="new-appointment-button"><Plus/>Novo agendamento</button>
            </section>

            <section className="appointments-filters">

                <div className="appointments-search">
                    <Search/>
                    <input 
                        className="search-box" 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Buscar por cliente, barbeiro ou serviço"/>
                </div>

                <div className="appointments-filter">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status">
                        <option value="all">Todos</option>
                        <option value="agendado">Agendado</option>
                        <option value="confirmado">Confirmado</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </div>

                <div className="appointments-filter">
                    <label htmlFor="barber">Barbeiro</label>
                    <select name="barber" id="barber">
                        <option value="all">Todos</option>
                    </select>
                </div>

                <div className="appointments-filter">
                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" id="date" />
                </div>

                <div className="appointments-filter-actions">
                    <button type="button">Limpar Filtros</button>
                </div>
            </section>

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
                    <div className="appointment-row">
                        <div className="appointments-date-time">
                            <Clock3 size={18} />

                            <div className="appointments-date-time-info">
                                <strong>09:00</strong>
                                <span>20/07/2026</span>
                            </div>
                        </div>

                        <div className="appointments-client">
                            <img
                                src={PhotoDaniel}
                                alt="Foto do cliente Daniel"
                                className="appointments-client-avatar"
                            />

                            <div className="appointments-client-info">
                                <strong>Daniel Alves</strong>
                                <span>(11) 99999-9999</span>
                            </div>
                        </div>

                        <span className="appointments-barber">Gabriel Oliveira Santos</span>

                        <div className="appointments-service">
                            <Scissors size={18} />

                            <div className="appointments-service-info">
                                <strong>Corte + Barba</strong>
                                <span>50 minutos</span>
                            </div>
                        </div>

                        <span className="appointments-status confirmed">
                            Confirmado
                        </span>

                        <div className="appointments-actions">
                            <button
                                type="button"
                                title="Clique para visualizar"
                                className="appointments-action-button"
                                aria-label="Visualizar agendamento"
                            >
                                <Eye size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para editar"
                                className="appointments-action-button"
                                aria-label="Editar agendamento"
                            >
                                <Pencil size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para cancelar"
                                className="appointments-action-button danger"
                                aria-label="Cancelar agendamento"
                            >
                                <CircleX size={17} />
                            </button>
                        </div>
                    </div>
            
                     <div className="appointment-row">
                        <div className="appointments-date-time">
                            <Clock3 size={18} />

                            <div className="appointments-date-time-info">
                                <strong>09:00</strong>
                                <span>20/07/2026</span>
                            </div>
                        </div>

                        <div className="appointments-client">
                            <img
                                src={PhotoDaniel}
                                alt="Foto do cliente Daniel"
                                className="appointments-client-avatar"
                            />

                            <div className="appointments-client-info">
                                <strong>Daniel Alves</strong>
                                <span>(11) 99999-9999</span>
                            </div>
                        </div>

                        <span className="appointments-barber">Gabriel Oliveira Santos</span>

                        <div className="appointments-service">
                            <Scissors size={18} />

                            <div className="appointments-service-info">
                                <strong>Corte + Barba</strong>
                                <span>50 minutos</span>
                            </div>
                        </div>

                        <span className="appointments-status canceled">
                            Cancelado
                        </span>

                        <div className="appointments-actions">
                            <button
                                type="button"
                                title="Clique para visualizar"
                                className="appointments-action-button"
                                aria-label="Visualizar agendamento"
                            >
                                <Eye size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para editar"
                                className="appointments-action-button"
                                aria-label="Editar agendamento"
                            >
                                <Pencil size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para cancelar"
                                className="appointments-action-button danger"
                                aria-label="Cancelar agendamento"
                            >
                                <CircleX size={17} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="appointment-row">
                        <div className="appointments-date-time">
                            <Clock3 size={18} />

                            <div className="appointments-date-time-info">
                                <strong>09:00</strong>
                                <span>20/07/2026</span>
                            </div>
                        </div>

                        <div className="appointments-client">
                            <img
                                src={PhotoDaniel}
                                alt="Foto do cliente Daniel"
                                className="appointments-client-avatar"
                            />

                            <div className="appointments-client-info">
                                <strong>Daniel Alves</strong>
                                <span>(11) 99999-9999</span>
                            </div>
                        </div>

                        <span className="appointments-barber">Gabriel Oliveira Santos</span>

                        <div className="appointments-service">
                            <Scissors size={18} />

                            <div className="appointments-service-info">
                                <strong>Corte + Barba</strong>
                                <span>50 minutos</span>
                            </div>
                        </div>

                        <span className="appointments-status pending">
                            Pendente
                        </span>

                        <div className="appointments-actions">
                            <button
                                type="button"
                                title="Clique para visualizar"
                                className="appointments-action-button"
                                aria-label="Visualizar agendamento"
                            >
                                <Eye size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para editar"
                                className="appointments-action-button"
                                aria-label="Editar agendamento"
                            >
                                <Pencil size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para cancelar"
                                className="appointments-action-button danger"
                                aria-label="Cancelar agendamento"
                            >
                                <CircleX size={17} />
                            </button>
                        </div>
                    </div>

                    <div className="appointment-row">
                        <div className="appointments-date-time">
                            <Clock3 size={18} />

                            <div className="appointments-date-time-info">
                                <strong>09:00</strong>
                                <span>20/07/2026</span>
                            </div>
                        </div>

                        <div className="appointments-client">
                            <img
                                src={PhotoDaniel}
                                alt="Foto do cliente Daniel"
                                className="appointments-client-avatar"
                            />

                            <div className="appointments-client-info">
                                <strong>Daniel Alves</strong>
                                <span>(11) 99999-9999</span>
                            </div>
                        </div>

                        <span className="appointments-barber">Gabriel Oliveira Santos</span>

                        <div className="appointments-service">
                            <Scissors size={18} />

                            <div className="appointments-service-info">
                                <strong>Corte + Barba</strong>
                                <span>50 minutos</span>
                            </div>
                        </div>

                        <span className="appointments-status confirmed">
                            Confirmado
                        </span>

                        <div className="appointments-actions">
                            <button
                                type="button"
                                title="Clique para visualizar"
                                className="appointments-action-button"
                                aria-label="Visualizar agendamento"
                            >
                                <Eye size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para editar"
                                className="appointments-action-button"
                                aria-label="Editar agendamento"
                            >
                                <Pencil size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para cancelar"
                                className="appointments-action-button danger"
                                aria-label="Cancelar agendamento"
                            >
                                <CircleX size={17} />
                            </button>
                        </div>
                    </div>

                    <div className="appointment-row">
                        <div className="appointments-date-time">
                            <Clock3 size={18} />

                            <div className="appointments-date-time-info">
                                <strong>09:00</strong>
                                <span>20/07/2026</span>
                            </div>
                        </div>

                        <div className="appointments-client">
                            <img
                                src={PhotoDaniel}
                                alt="Foto do cliente Daniel"
                                className="appointments-client-avatar"
                            />

                            <div className="appointments-client-info">
                                <strong>Daniel Alves</strong>
                                <span>(11) 99999-9999</span>
                            </div>
                        </div>

                        <span className="appointments-barber">Gabriel Oliveira Santos</span>

                        <div className="appointments-service">
                            <Scissors size={18} />

                            <div className="appointments-service-info">
                                <strong>Corte + Barba</strong>
                                <span>50 minutos</span>
                            </div>
                        </div>

                        <span className="appointments-status confirmed">
                            Confirmado
                        </span>

                        <div className="appointments-actions">
                            <button
                                type="button"
                                title="Clique para visualizar"
                                className="appointments-action-button"
                                aria-label="Visualizar agendamento"
                            >
                                <Eye size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para editar"
                                className="appointments-action-button"
                                aria-label="Editar agendamento"
                            >
                                <Pencil size={17} />
                            </button>

                            <button
                                type="button"
                                title="Clique para cancelar"
                                className="appointments-action-button danger"
                                aria-label="Cancelar agendamento"
                            >
                                <CircleX size={17} />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="appointments-table-footer">
                    <div className="appointments-results-info">
                        <p>Mostrando 1 a 5 de 32 agendamentos</p>
                    </div>

                    <div className="appointments-pagination">
                        <button type="button" className="pagination-button"><ChevronLeft/></button>
                        <button type="button" className="pagination-button active">1</button>
                        <button type="button" className="pagination-button">2</button>
                        <button type="button" className="pagination-button">3</button>
                        <button type="button" className="pagination-button"><ChevronRight/></button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Appointments