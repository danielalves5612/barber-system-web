import "./ServiceRow.css"
import { Pencil, CircleX, Clock3} from "lucide-react"

function ServiceRow({ service, handleEditService, handleDeactivateService }){
    return (
        <div className="service-row">
            <div className="service-info">
                <strong className="service-name">{service.nome}</strong>

                <span className="service-description">{service.descricao}</span>
            </div>

            <span className={`service-category ${service.categoria.toLowerCase()}`}>
            <span className="service-category-dot"></span>
            {service.categoria}
            </span>
            <span className="service-duration">
                <Clock3 size={16} />
                {service.duracao} min
            </span>

            <span className="service-price">
                {Number(service.preco).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </span>

            <span className={`service-status ${service.ativo ? "active" : "inactive"}`}>
                <span className="service-status-dot"></span>
                {service.ativo ? "Ativo" : "Inativo"}
            </span>

            <div className="service-actions">
                <button
                    onClick={() => {
                        handleEditService(service)
                    }}
                    type="button"
                    className="service-action-button edit"
                    aria-label="Editar serviço"
                >
                    <Pencil size={17} />
                </button>

                <button
                    onClick={() => handleDeactivateService(service)}
                    type="button"
                    className="service-action-button delete"
                    aria-label="Excluir serviço"
                >
                    <CircleX size={18} />
                </button>
            </div>
        </div>
    )
}

export default ServiceRow