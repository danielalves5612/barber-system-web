import "./ServicesHeader.css"
import { BriefcaseBusiness } from "lucide-react"

function ServicesHeader({ setShowModal }){
    return (
        <section className="services-header">
            <div className="services-title">
                <BriefcaseBusiness/>

                <div className="services-title-text">
                    <h1>Serviços</h1>
                    <p>Gerencie os serviços oferecidos pela barbearia</p>
                </div>
            </div>

            <button
                onClick={() => setShowModal(true)}
                type="button"
                className="new-service-button"
            >
                + Novo serviço
            </button>
        </section>
    )
}

export default ServicesHeader