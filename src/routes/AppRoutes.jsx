import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import Services from "../pages/Services/Services"
import Appointments from "../pages/Appointments/Appointments"
import DashBoardLayout from "../layouts/DashboardLayout/DashboardLayout"
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={
                <PrivateRoute allowedRoles={["admin"]}>
                    <DashBoardLayout><Dashboard/></DashBoardLayout>
                </PrivateRoute>}/>
            <Route path="/services" element={
                <PrivateRoute allowedRoles={["admin"]}>
                    <DashBoardLayout><Services/></DashBoardLayout>
                </PrivateRoute>}/>
            <Route path="/appointments" element={
                <PrivateRoute allowedRoles={["admin", "cliente"]}>
                    <DashBoardLayout><Appointments/></DashBoardLayout>
                </PrivateRoute>}/>
        </Routes>
    )
}

export default AppRoutes