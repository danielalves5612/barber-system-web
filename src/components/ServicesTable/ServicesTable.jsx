import ServiceRow from "../ServiceRow/ServiceRow"
import { ChevronLeft, ChevronRight} from "lucide-react"
import "./ServicesTable.css"

function ServicesTable({ 
    arrayServicesPage, 
    handleEditService, 
    handleDeactivateService,
    currentPage, 
    setCurrentPage,
    totalPages,
    arrayPageButton,
    indexOfFirstService,
    indexOflastService,
    filteredServices }){
    return (
        <section className="services-table-container">
            <div className="services-table-header">
                <span>Serviço</span>
                <span>Categoria</span>
                <span>Duração</span>
                <span>Preço</span>
                <span>Status</span>
                <span>Ações</span>
            </div>
            <div className="services-table-body">
                {arrayServicesPage.map((service) => {
                    return (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            handleEditService={handleEditService}
                            handleDeactivateService={handleDeactivateService}
                        />
                    )
                })}
            </div>

            <div className="services-table-footer">
                <p className="services-results-info">
                    Mostrando {indexOfFirstService + 1} a {indexOflastService} de {filteredServices.length} serviços
                </p>

                <div className="services-pagination">
                    <button
                        onClick={() => 
                            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
                        className="pagination-button">
                        <ChevronLeft size={18}/>
                    </button>

                    {arrayPageButton.map((page) => {
                        return (
                            <button 
                                key={page} 
                                onClick={() => setCurrentPage(page)}
                                className={`pagination-button ${currentPage === page ? "active" : ""}`}>{page}
                            </button>
                        )
                    })}

                    <button 
                        onClick={() => 
                            setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage)} 
                        className="pagination-button">
                        <ChevronRight size={18}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesTable