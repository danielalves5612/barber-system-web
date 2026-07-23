import { Plus, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import AppointmentViewModal from "../../components/AppointmentViewModal"
import AppointmentFormModal from "../../components/AppointmentFormModal"
import AppointmentFilters from "../../components/AppointmentFilters"
import AppointmentsTable from "../../components/AppointmentsTable"
import formatters from "../../utils/formatters"
import "./Appointments.css"

function Appointments(){

    const [appointments, setAppointments] = useState([])
    const [showModal, setShowModal] = useState(false)

    const [data, setData] = useState('')
    const [hora, setHora] = useState('')

    const [clienteId, setClienteId] = useState('')
    const [barbeiroId, setBarbeiroId] = useState('')
    const [serviceId, setServiceId] = useState('')
    const [status, setStatus] = useState('')

    const [users, setUsers] = useState([])
    const [services, setServices] = useState([])

    const [editingAppointment, setEditingAppointment] = useState(null)
    const [viewAppointment, setViewAppointment] = useState(null)

    const [search, setSearch] = useState('')
    const [filterStatus, setFilterStatus] = useState("all")
    const [filterBarbeiro, setFilterBarbeiro] = useState("all")
    const [filterData, setFilterData] = useState('')

    async function getAppointments(){
        try{
            const response = await api.get("/appointments")

            const appointment = response.data

            setAppointments(appointment)
        }catch(e){
            const message = e.response?.data?.errors?.[0] || "Falha ao criar agendamentos"
            toast.error(message)
        }
    }

    useEffect(() => {

        getAppointments()

    }, [])

    useEffect(() => {
        async function getUsers(){
            try{
                const response = await api.get('/users')

                const users = response.data

                setUsers(users)

            }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao carregar usuários"
                toast.error(message)
            }
        }

        getUsers()

    }, [])

    useEffect(() => {
        async function getServices(){
            try{
                const response = await api.get('/services')

                const services = response.data

                setServices(services)

            }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao carregar serviços"
                toast.error(message)
            }
        }

        getServices()

    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [search, filterStatus, filterBarbeiro, filterData])

    async function handleSubmit(event){
        event.preventDefault()

        if(!data || !hora || !clienteId || !serviceId || !barbeiroId){
            return toast.error('Todos os campos são obrigatórios')
        }

        if(editingAppointment){
            try{
                await api.put(`/appointments/${editingAppointment.id}`, {
                    data,
                    hora,
                    cliente_id: clienteId,
                    barbeiro_id: barbeiroId,
                    service_id: serviceId,
                    status,
                })

                toast.success("Agendamento editado com sucesso")

                handleCloseModal()
                
                getAppointments()
            }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao editar agendamento"
                toast.error(message)
            }

        }else{

            try{
                await api.post("/appointments", {
                    data,
                    hora,
                    cliente_id: clienteId,
                    barbeiro_id: barbeiroId,
                    service_id: serviceId
                })

                toast.success('Agendamento criado com sucesso')

                handleCloseModal()

                getAppointments()

            }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao criar agendamento"
                toast.error(message)
            }
        }

    }
    
    function handleViewClick(appointment){
        setViewAppointment(appointment)
    }

    async function handleEditClick(appointment){
        setEditingAppointment(appointment)

        setData(appointment.data)
        setHora(appointment.hora)
        setClienteId(appointment.cliente.id)
        setBarbeiroId(appointment.barbeiro.id)
        setServiceId(appointment.service.id)
        setStatus(appointment.status)

        setShowModal(true)

    }

    async function handleClickCancel(appointment){
        try{
            await api.put(`/appointments/${appointment.id}`, { status: 'cancelado'})

            toast.success("Agendamento cancelado com sucesso")

            getAppointments()
        }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao cancelar agendamento"
                toast.error(message)
        }

    }

    const filteredAppointments = appointments.filter((appointment) => {
        const searchText = search.toLowerCase()

        const matchNome = appointment.cliente.nome.toLowerCase().includes(searchText)
        const matchNomeBarbeiro = appointment.barbeiro.nome.toLowerCase().includes(searchText)
        const matchService = appointment.service.nome.toLowerCase().includes(searchText)

        const matchStatus = filterStatus === "all" || appointment.status === filterStatus

        const matchBarbeiro = filterBarbeiro === appointment.barbeiro.nome || filterBarbeiro === "all"

        const matchData = filterData === appointment.data || filterData === ""

        return (matchNome || matchNomeBarbeiro || matchService) && matchStatus && matchBarbeiro && matchData
               
    })

    function handleClickClearFilter(){
        setSearch('')
        setFilterStatus("all")
        setFilterBarbeiro("all")
        setFilterData("")
    }

    function handleCloseModal(){
        setShowModal(false)
        setData("")
        setHora("")
        setClienteId("")
        setBarbeiroId("")
        setServiceId("")
        setStatus("")
        setEditingAppointment(null)
    }

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(filteredAppointments.length / 5)

    const startIndex = (currentPage - 1) * 5

    const endIndex = (startIndex + 5)

    const arrayPages = filteredAppointments.slice(startIndex, endIndex)

    const arrayPagesButton = Array.from({ length: totalPages}, (_, index) => (index + 1))

    return (
        <section className="appointments-page">

            <section className="appointments-header">

                <div className="appointments-title">
                    <CalendarDays/>

                    <div className="appointments-title-text">
                        <h1>Agendamentos</h1>
                        <p>Gerencie todos os agendamentos da barbearia</p>
                    </div>
                </div>

                <button onClick={() => setShowModal(true)} className="new-appointment-button"><Plus/>Novo agendamento</button>
            </section>

            <AppointmentFilters
                search={search}
                setSearch={setSearch}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                filterBarbeiro={filterBarbeiro}
                setFilterBarbeiro={setFilterBarbeiro}
                users={users}
                handleClickClearFilter={handleClickClearFilter}
                filterData={filterData}
                setFilterData={setFilterData}
            />

            <AppointmentsTable
                arrayPages={arrayPages}
                handleViewClick={handleViewClick}
                handleEditClick={handleEditClick}
                handleClickCancel={handleClickCancel}
                startIndex={startIndex}
                endIndex={endIndex}
                filteredAppointments={filteredAppointments}
                arrayPagesButton={arrayPagesButton}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />

            {viewAppointment && 
                <AppointmentViewModal
                    viewAppointment={viewAppointment}
                    setViewAppointment={setViewAppointment}
                />
            }

            {showModal && 
                <AppointmentFormModal
                    editingAppointment={editingAppointment}
                    data={data}
                    setData={setData}
                    hora={hora}
                    setHora={setHora}
                    clienteId={clienteId}
                    setClienteId={setClienteId}
                    barbeiroId={barbeiroId}
                    setBarbeiroId={setBarbeiroId}
                    serviceId={serviceId}
                    setServiceId={setServiceId}
                    status={status}
                    setStatus={setStatus}
                    users={users}
                    services={services}
                    handleCloseModal={handleCloseModal}
                    handleSubmit={handleSubmit}
                />}
        </section>
    )
}

export default Appointments