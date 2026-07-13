import { useEffect } from "react"
import api from "../../services/api"

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

  return <h1>Dashboard</h1>
}

export default Dashboard