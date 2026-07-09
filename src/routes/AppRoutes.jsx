import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Services from "../pages/Services/Services"
import Photos from "../pages/Photos/Photos"
import Appointments from "../pages/Appointments/Appointments"

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/photos" element={<Photos/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
        </Routes>
    )
}

export default AppRoutes