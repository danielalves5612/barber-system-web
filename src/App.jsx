import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import AuthProvider from "./contexts/AuthProvider"

function App() {

  return (
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes/>
        </AuthProvider>
        <ToastContainer/>
      </BrowserRouter>
  )
}

export default App
