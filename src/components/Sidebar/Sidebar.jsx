import { NavLink } from 'react-router-dom'
import { 
    LayoutDashboard, 
    CalendarDays, 
    Users, 
    Scissors, 
    BriefcaseBusiness, 
    Package,
    DollarSign,
    ChartColumn,
    Settings,
    LogOut } from 'lucide-react'
import PhotoDaniel from "../../assets/images/foto-de-perfil.jpeg"
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import UserAvatar from '../UserAvatar'
import nameUtils from '../../utils/nameUtils'
import './Sidebar.css'

function Sidebar(){

    const { user, handleClickLogout } = useContext(AuthContext)

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <h1>Barber <span>System</span></h1>
            </div>
            
            {user?.role === "admin" && (
                <nav className="sidebar-nav">
                    <NavLink to="/dashboard" className="sidebar-link">
                        <LayoutDashboard size={20}/>
                        <span>Dashboard</span>
                    </NavLink>
                
                    <NavLink to="/appointments" className="sidebar-link">
                        <CalendarDays size={20}/>
                        <span>Agendamentos</span>
                    </NavLink>
                
                    <NavLink to="/clients" className="sidebar-link">
                        <Users size={20}/>
                        <span>Clientes</span>
                    </NavLink>
                
                    <NavLink to="/barbers" className="sidebar-link">
                        <Scissors size={20}/>
                        <span>Barbeiros</span>
                    </NavLink>
            
                    <NavLink to="/services" className="sidebar-link">
                        <BriefcaseBusiness size={20}/>
                        <span>Serviços</span>
                    </NavLink>

                    <NavLink to="/products" className="sidebar-link">
                        <Package size={20}/>
                        <span>Produtos</span>
                    </NavLink>

                    <NavLink to="/sales" className="sidebar-link">
                        <DollarSign size={20}/>
                        <span>Vendas</span>
                    </NavLink>

                    <NavLink to="/reports" className="sidebar-link">
                        <ChartColumn size={20}/>
                        <span>Relatórios</span>
                    </NavLink>
                    
                    <NavLink to="/settings" className="sidebar-link">
                        <Settings size={20}/>
                        <span>Configurações</span>
                    </NavLink>

                </nav>
            )}

            {user?.role === "cliente" && (
                <nav className='sidebar-nav'>
                    <NavLink to="/appointments" className="sidebar-link">
                        <CalendarDays size={20}/>
                        <span>Agendamentos</span>
                    </NavLink>

                    <NavLink to="/settings" className="sidebar-link">
                        <Settings size={20}/>
                        <span>Configurações</span>
                    </NavLink>
                </nav>
            )}


            <div className="sidebar-footer">
                <UserAvatar
                    nome={user.nome}
                />

                <div className='sidebar-user'>
                    <strong>{nameUtils(user.nome)}</strong>
                    <span>{user.role === "admin" ? "Admin" : "Cliente"}</span>
                </div>

                <button onClick={() => handleClickLogout()} className='logout-button'>
                    <LogOut size={18}/>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar