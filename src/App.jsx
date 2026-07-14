import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

function App() {

  return (
      <BrowserRouter>
        <AppRoutes/>
        <ToastContainer/>
      </BrowserRouter>
  )
}

export default App
