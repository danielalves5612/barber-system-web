import { Search } from "lucide-react"
import "./style.css"

function AppointmentFilters({
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    filterBarbeiro,
    setFilterBarbeiro,
    users,
    barbers,
    handleClickClearFilter,
    setFilterData,
    filterData
}){
    return (
        <section className="appointments-filters">

            <div className="appointments-search">   
                <Search/>
                <input
                    value={search} onChange={(event) => setSearch(event.target.value)} 
                    className="search-box" 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Buscar por cliente, barbeiro ou serviço"/>
            </div>

            <div className="appointments-filter">
                <label htmlFor="status">Status</label>
                <select value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)} name="status" id="status">
                    <option value="all">Todos</option>
                    <option value="agendado">Agendado</option>
                    <option value="confirmado">Confirmado</option>
                    <option value="cancelado">Cancelado</option>
                </select>
            </div>

            <div className="appointments-filter">
                <label htmlFor="barber">Barbeiro</label>
                <select value={filterBarbeiro} onChange={(event) => setFilterBarbeiro(event.target.value)} name="barber" id="barber">
                    <option value="all">Todos</option>
                    {barbers.map((barber) => {
                        return (
                            <option key={barber.id} value={barber.nome}>{barber.nome}</option>
                        )
                    })}
                </select>
            </div>

            <div className="appointments-filter">
                <label htmlFor="date">Data</label>
                <input value={filterData} onChange={(event) => setFilterData(event.target.value)} type="date" name="date" id="date" />
            </div>

            <div className="appointments-filter-actions">
                <button onClick={handleClickClearFilter} type="button">Limpar Filtros</button>
            </div>

        </section>
    )
}

export default AppointmentFilters