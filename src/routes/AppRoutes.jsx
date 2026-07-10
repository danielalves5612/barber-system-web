import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Services from "../pages/Services/Services"
import Photos from "../pages/Photos/Photos"
import Appointments from "../pages/Appointments/Appointments"
import DashBoardLayout from "../layouts/DashboardLayout"
import Register from "../pages/Register/Register";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<DashBoardLayout><Dashboard/></DashBoardLayout>}/>
            <Route path="/services" element={<DashBoardLayout><Services/></DashBoardLayout>}/>
            <Route path="/photos" element={<DashBoardLayout><Photos/></DashBoardLayout>}/>
            <Route path="/appointments" element={<DashBoardLayout><Appointments/></DashBoardLayout>}/>
        </Routes>
    )
}

export default AppRoutes