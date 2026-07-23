import { Search } from "lucide-react"
import "./ServicesFilters.css"

function ServicesFilters({
    search,
    setSearch,
    filterCategory,
    setFilterCategory,
    filterStatus,
    setFilterStatus,
    filterDuration,
    setFilterDuration,
    cleanFilters
}) {
    return (
        <section className="services-filters">

            <div className="services-search">
                <Search size={19} />

                <input
                    type="text"
                    placeholder="Buscar por nome ou descrição"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div className="services-filter">
                <label htmlFor="category">Categoria</label>

                <select
                    id="category"
                    value={filterCategory}
                    onChange={(event) => setFilterCategory(event.target.value)}
                >
                    <option value="all">Todas</option>
                    <option value="Cabelo">Cabelo</option>
                    <option value="Barba">Barba</option>
                    <option value="Combo">Combo</option>
                    <option value="Tratamento">Tratamento</option>
                    <option value="Acabamento">Acabamento</option>
                </select>
            </div>

            <div className="services-filter">
                <label htmlFor="duration">Duração</label>

                <select value={filterDuration} onChange={(event) => setFilterDuration(event.target.value)} name="duration" id="duration">
                    <option value="all">Todas</option>
                    <option value="15">15 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="60">60 minutos</option>
                </select>
            </div>

            <div className="services-filter">
                <label htmlFor="status">Status</label>

                <select
                    id="status"
                    value={filterStatus}
                    onChange={(event) => setFilterStatus(event.target.value)}
                >
                    <option value="all">Todos</option>
                    <option value="active">Ativos</option>
                    <option value="inactive">Inativos</option>
                </select>
            </div>

            <div className="services-filter-actions">
                <button onClick={() => cleanFilters()}>Limpar Filtros</button>
            </div>

        </section>
    )
}

export default ServicesFilters