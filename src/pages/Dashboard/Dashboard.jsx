import { useEffect } from "react"
import { CalendarDays, Users, DollarSign, Package, Menu, Bell, TrendingUp, TrendingDown } from "lucide-react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import DanielPhoto from "../../assets/images/foto-de-perfil.jpeg"
import RevenueChart from "../../components/RevenueChart/RevenueChart"
import TopServicesChart from "../../components/TopServicesChart/TopServicesChart"
import SalesCategoryChart from "../../components/SalesCategoryChart/SalesCategoryChart"
import './Dashboard.css'

function Dashboard() {
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get("/users")

        console.log(response.data)
      } catch (error) {
        console.log(error.response?.data || error.message)
      }
    }

    getUsers()
  }, [])

  return (
    <section className="dashboard-page">

      <header className="dashboard-header">
        <div className="dashboard-header-left">

          <button type="button" 
            className="sidebar-toggle" 
            aria-label="Abrir ou fechar menu lateral">
            <Menu size={24}/>
          </button>

          <h1 className="dashboard-title">Dashboard</h1>
        </div>

        <button type="button" 
          className="notification-button"
          aria-label="Ver notificações">
          <Bell size={22}/>  
          <span className="notification-badge">3</span>
        </button>

      </header>

      <section className="dashboard-summary">

        <div className="summary-card">

          <div className="summary-icon"><CalendarDays/></div>

          <div className="summary-content">
              <span className="summary-label">Agendamentos hoje</span>

              <strong className="summary-value">12</strong>

            <div className="summary-change">
                <div className="summary-change-value negative">
                    <TrendingDown size={16} />
                    <span>-15%</span>
                </div>

                <span className="summary-change-text">
                    em relação a ontem
                </span>
            </div>

          </div>
          
        </div>

        <div className="summary-card">

          <div className="summary-icon"><Users/></div>

          <div className="summary-content">
            <span className="summary-label">Clientes Cadastrados</span>

            <strong className="summary-value">156</strong>

            <div className="summary-change">
                <div className="summary-change-value positive">
                    <TrendingUp size={16} />
                    <span>+20%</span>
                </div>

                <span className="summary-change-text">
                    em relação a ontem
                </span>
            </div>

          </div>

        </div>

        <div className="summary-card">

          <div className="summary-icon"><DollarSign/></div>

          <div className="summary-content">
            <span className="summary-label">Faturamento (mês)</span>

            <strong className="summary-value">R$ 8.450,00</strong>
            
            <div className="summary-change">
                <div className="summary-change-value positive">
                    <TrendingUp size={16} />
                    <span>+20%</span>
                </div>

                <span className="summary-change-text">
                    em relação a ontem
                </span>
            </div>

          </div>

        </div>

        <div className="summary-card">

          <div className="summary-icon"><Package/></div>

          <div className="summary-content">
            <span className="summary-label">Produtos em Estoque</span>

            <strong className="summary-value">42</strong>

            <div className="summary-change">
                <div className="summary-change-value positive">
                    <TrendingUp size={16} />
                    <span>+20%</span>
                </div>

                <span className="summary-change-text">
                    em relação a ontem
                </span>
            </div>

          </div>

        </div>

      </section>

      <section className="dashboard-main-grid">

          <div className="dashboard-revenue">
            <div className="revenue-header">
              <h2>Faturamento dos últimos 7 dias</h2>
              <select className="revenue-period" defaultValue={7}>
                <option value="7">Últimos 7 dias</option>
                <option value="30">Últimos 30 dias</option>
                <option value="90">Últimos 3 meses</option>
              </select>
            </div>

            <div className="revenue-summary">
                  <strong>R$ 5.725,00</strong>
            </div>

            <div className="revenue-change">
              <div className="revenue-change-value positive">
                  <TrendingUp size={16} />
                  <span>+20%</span>
              </div>

              <span className="revenue-change-text">
                  em relação à semana passada
                </span>
            </div>

            <div className="revenue-chart">
              <RevenueChart/>
            </div>
          </div>

          <div className="dashboard-appointments">
            <div className="appointments-header">
              <h2>Agendamentos de hoje</h2>
              <Link className="appointments-link" to="/appointments">Ver todos</Link>
          </div>

            <div className="appointments-list">
              <div className="appointment-item">
                <span className="appointment-time">09:00</span>

                <img className="appointment-avatar" 
                src={DanielPhoto}
                alt="Foto de Daniel" />

                
                <strong className="appointment-client">João Pereira</strong>
                <span className="appointment-service">Corte + Barba</span>
                <span className="appointment-status confirmed">Confirmado</span>

              </div>

              <div className="appointment-item">
                <span className="appointment-time">10:30</span>

                <img className="appointment-avatar" 
                src={DanielPhoto}
                alt="Foto de Daniel" />

                
                <strong className="appointment-client">João Pereira</strong>
                <span className="appointment-service">Corte + Barba</span>
                
                <span className="appointment-status pending">Pendente</span>
              </div>

              <div className="appointment-item">
                <span className="appointment-time">10:30</span>

                <img className="appointment-avatar" 
                src={DanielPhoto}
                alt="Foto de Daniel" />

                
                <strong className="appointment-client">João Pereira</strong>
                <span className="appointment-service">Corte + Barba</span>
                
                <span className="appointment-status pending">Pendente</span>
              </div>

              <div className="appointment-item">
                <span className="appointment-time">14:00</span>

                <img className="appointment-avatar" 
                src={DanielPhoto} 
                alt="Foto de Daniel" />

                
                <strong className="appointment-client">João Pereira</strong>
                <span className="appointment-service">Corte + Barba</span>
                <span className="appointment-status confirmed">Confirmado</span>

              </div>

              <div className="appointment-item">
                <span className="appointment-time">14:00</span>

                <img className="appointment-avatar" 
                src={DanielPhoto} 
                alt="Foto de Daniel" />

                
                <strong className="appointment-client">João Pereira</strong>
                <span className="appointment-service">Corte + Barba</span>
                <span className="appointment-status canceled">Cancelado</span>

              </div>
            </div>

            <button className="new-appointment-button" type="button">+ Novo agendamento</button>
        </div>
      </section>

      <section className="dashboard-bottom-grid">

          <div className="dashboard-top-services">
              <div className="dashboard-card-header">
                  <h2>Serviços mais procurados</h2>
                  <Link to="/services">Ver todos</Link>
              </div>

              <div className="top-services-chart">
                  <TopServicesChart/>
              </div>
          </div>

        <div className="dashboard-sales-by-category">
          <div className="dashboard-card-header">
            <h2>Vendas por categoria</h2>
            <Link to="/sales">Ver todas</Link>
          </div>

          <div className="sales-chart">
            <SalesCategoryChart/>
          </div>
        </div>

        <div className="dashboard-low-stock">
          <div className="dashboard-card-header">
            <h2>Produtos com estoque baixo</h2>
            <Link to="/products">Ver todos</Link>
          </div>

          <div className="low-stock-list">
            <div className="low-stock-item">
              <div className="low-stock-info">
                <strong>Pomada Matte</strong>
                <span>Estoque crítico</span>
              </div>

              <span className="low-stock-quantity">4 un.</span>
            </div>

            <div className="low-stock-item">
              <div className="low-stock-info">
                <strong>Óleo para barba</strong>
                <span>Estoque crítico</span>
              </div>

              <span className="low-stock-quantity">3 un.</span>
            </div>

            <div className="low-stock-item">
              <div className="low-stock-info">
                <strong>Navalha Premium</strong>
                <span>Estoque crítico</span>
              </div>

              <span className="low-stock-quantity">2 un.</span>
            </div>
          </div>

          <Link className="manage-products-button" to="/products">Gerenciar produtos</Link>
        </div>
      </section>

    </section>
  )
}

export default Dashboard