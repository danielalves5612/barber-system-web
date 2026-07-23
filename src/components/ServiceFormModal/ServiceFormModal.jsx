import "./ServiceFormModal.css"

function ServiceFormModal({
    editingService,
    nome,
    setNome,
    descricao,
    setDescricao,
    categoria,
    setCategoria,
    preco,
    setPreco,
    duracao,
    setDuracao,
    ativo,
    setAtivo,
    handleCloseModal,
    handleSubmit
}) {
    return (
        <div
            className="service-modal-overlay"
            onClick={handleCloseModal}
        >
            <div
                className="service-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="service-modal-header">
                    <h2>
                        {editingService ? "Editar serviço" : "Novo serviço"}
                    </h2>

                    <p>
                        {editingService
                            ? "Atualize as informações do serviço"
                            : "Cadastre um novo serviço para a barbearia"}
                    </p>
                </div>

                <form
                    className="service-modal-form"
                    onSubmit={handleSubmit}
                >
                    <div className="service-form-group">
                        <label htmlFor="service-name">Nome</label>

                        <input
                            id="service-name"
                            type="text"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            placeholder="Ex: Corte Social"
                        />
                    </div>

                    <div className="service-form-group">
                        <label htmlFor="service-description">
                            Descrição
                        </label>

                        <textarea
                            id="service-description"
                            value={descricao}
                            onChange={(event) => setDescricao(event.target.value)}
                            placeholder="Descreva o serviço"
                        />
                    </div>

                    <div className="service-form-row">
                        <div className="service-form-group">
                            <label htmlFor="service-category">
                                Categoria
                            </label>

                            <select
                                id="service-category"
                                value={categoria}
                                onChange={(event) => setCategoria(event.target.value)}
                            >
                                <option value="">
                                    Selecione uma categoria
                                </option>
                                <option value="Cabelo">Cabelo</option>
                                <option value="Barba">Barba</option>
                                <option value="Combo">Combo</option>
                                <option value="Tratamento">Tratamento</option>
                                <option value="Acabamento">Acabamento</option>
                            </select>
                        </div>

                        <div className="service-form-group">
                            <label htmlFor="service-duration">
                                Duração
                            </label>

                            <input
                                id="service-duration"
                                type="number"
                                min="15"
                                value={duracao}
                                onChange={(event) => setDuracao(event.target.value)}
                                placeholder="30"
                            />
                        </div>
                    </div>

                    <div className="service-form-row">
                        <div className="service-form-group">
                            <label htmlFor="service-price">
                                Preço
                            </label>

                            <input
                                id="service-price"
                                type="number"
                                step="0.01"
                                min="0"
                                value={preco}
                                onChange={(event) => setPreco(event.target.value)}
                                placeholder="35.00"
                            />
                        </div>

                        {editingService && (
                            <div className="service-form-group">
                                <label htmlFor="service-status">
                                    Status
                                </label>

                                <select
                                    id="service-status"
                                    value={ativo}
                                    onChange={(event) => setAtivo(event.target.value === "true")}
                                >
                                    <option value="true">Ativo</option>
                                    <option value="false">Inativo</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="service-modal-footer">
                        <button
                            type="button"
                            className="service-modal-cancel"
                            onClick={handleCloseModal}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="service-modal-submit"
                        >
                            {editingService
                                ? "Salvar alterações"
                                : "Criar serviço"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ServiceFormModal