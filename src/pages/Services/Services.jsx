import { useEffect, useState } from "react"
import api from "../../services/api"
import ServicesTable from "../../components/ServicesTable/ServicesTable"
import ServicesFilters from "../../components/ServicesFilters/ServicesFilters"
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader"
import ServiceFormModal from "../../components/ServiceFormModal/ServiceFormModal"
import { toast } from "react-toastify"
import "./Services.css"

function Services(){

    const [services, setServices] = useState([])
    
    const [search, setSearch] = useState("")
    const [filterCategory, setFilterCategory] = useState("all")
    const [filterStatus, setFilterStatus] = useState("all")
    const [filterDuration, setFilterDuration] = useState("all")

    const [showModal, setShowModal] = useState(false)

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setPreco] = useState("")
    const [duracao, setDuracao] = useState("")
    const [ativo, setAtivo] = useState(false)

    const [editingService, setEditingService] = useState(null)

    async function getServices(){
        try{
            const response = await api.get("/services")

            setServices(response.data)

        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        
        getServices()

    }, [])

    const filteredServices = services.filter((service => {
        const searchText = search.toLowerCase()

        const matchSearchNome = service.nome.toLowerCase().includes(searchText) 
        const matchSearchDescricao = service.descricao.toLowerCase().includes(searchText)
        const matchCategory = filterCategory === "all" || service.categoria === filterCategory
        const matchStatus = filterStatus === "all" || (filterStatus === "active" ? service.ativo === true : service.ativo === false)
        const matchDuration = filterDuration === "all" || Number(filterDuration )=== Number(service.duracao)

        return (matchSearchNome || matchSearchDescricao) && matchCategory && matchStatus && matchDuration
    }))

    function cleanFilters(){
        setSearch("")
        setFilterCategory("all")
        setFilterStatus("all")
        setFilterDuration("all")
    }

    function handleCloseModal(){
        setNome("")
        setDescricao("")
        setCategoria("")
        setPreco("")
        setDuracao("")
        setAtivo(false)
        setShowModal(false)
        setEditingService(null)

    }

    function handleEditService(service){
        setEditingService(service)
        setNome(service.nome)
        setDescricao(service.descricao)
        setCategoria(service.categoria)
        setPreco(service.preco)
        setDuracao(service.duracao)
        setAtivo(service.ativo)
        setShowModal(true)
    }

    async function handleDeactivateService(service){
        try{
            await api.put(`/services/${service.id}`, {
                ativo: false
            })

            toast.success("Serviço inativado com sucesso")

            getServices()
        }catch(e){
            const message = e.response?.data?.errors?.[0] || "Falha ao inativar serviço"
            toast.error(message)
        }
    }

    async function handleSubmit(event){
        event.preventDefault()

        if(editingService){
            try{
                await api.put(`/services/${editingService.id}`, {
                    nome,
                    descricao,
                    categoria,
                    preco,
                    duracao,
                    ativo
                })

                toast.success("Serviço editado com sucesso")

                handleCloseModal()

                getServices()

            }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao editar serviço"
                toast.error(message)
            }
        }else{
            try{
                await api.post("/services", {
                    nome,
                    descricao,
                    categoria,
                    preco,
                    duracao,
                })

                toast.success("Serviço criado com sucesso")

                handleCloseModal()

                getServices()
            
            }catch(e){
                const message = e.response?.data?.errors?.[0] || "Falha ao criar serviço"
                toast.error(message)

            }
        }
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [search, filterCategory, filterStatus, filterDuration])

    const [currentPage, setCurrentPage] = useState(1)
    const servicesPerPage = 5
    const totalPages = Math.ceil(filteredServices.length / servicesPerPage)
    const indexOflastService = currentPage * servicesPerPage
    const indexOfFirstService = indexOflastService - servicesPerPage
    const arrayServicesPage = filteredServices.slice(indexOfFirstService, indexOflastService)

    const arrayPageButton = Array.from({ length: totalPages}, (_, indexOfFirstService) => indexOfFirstService + 1)

    return (
        <section className="services-page">

            <ServicesHeader
                setShowModal={setShowModal}
            />

            <ServicesFilters
                search={search}
                setSearch={setSearch}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                filterDuration={filterDuration}
                setFilterDuration={setFilterDuration}
                cleanFilters={cleanFilters}
            />
            
            <ServicesTable
                arrayServicesPage={arrayServicesPage}
                setShowModal={setShowModal}
                handleEditService={handleEditService}
                handleDeactivateService={handleDeactivateService}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
                arrayPageButton={arrayPageButton}
                indexOfFirstService={indexOfFirstService}
                indexOflastService={indexOflastService}
                filteredServices={filteredServices}
            />

            {showModal && (
                <ServiceFormModal
                    editingService={editingService}
                    nome={nome}
                    setNome={setNome}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    categoria={categoria}
                    setCategoria={setCategoria}
                    preco={preco}
                    setPreco={setPreco}
                    duracao={duracao}
                    setDuracao={setDuracao}
                    ativo={ativo}
                    setAtivo={setAtivo}
                    handleCloseModal={handleCloseModal}
                    handleSubmit={handleSubmit}
                />
            )}

        </section>
    )
}

export default Services