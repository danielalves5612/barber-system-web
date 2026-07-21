import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import api from "../../services/api"
import { useEffect, useState } from "react"

const COLORS = [
    "#1d4ed8",
    "#2563eb",
    "#3b82f6",
    "#64748b",
    "#4f6fae"
]

function TopServicesChart() {

    const [appointments, setAppointments] = useState([])
    
    useEffect(() => {
        async function getAppointments() {
            try{
                const response = await api.get("/appointments/")

                setAppointments(response.data)
            }catch(error){
                console.log(error.response?.data || error.message)
            }
        }

        getAppointments()
    }, [])

    const arrayAppointments = []

    appointments.forEach((appointment) => {
        const arrayFind = arrayAppointments.find((objAppointment) => objAppointment.name === appointment.service.nome)
        if(arrayFind){
            arrayFind.value = arrayFind.value + 1
        }else{
            arrayAppointments.push({
                name: appointment.service.nome,
                value: 1
            })
        }
    })

    const arrayFilterSort = arrayAppointments.sort((a, b) => b.value - a.value).slice(0, 5)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={arrayFilterSort}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={54}
                    outerRadius={78}
                    paddingAngle={4}
                >
                    {arrayFilterSort.map((item, index) => (
                        <Cell
                            key={item.name}
                            fill={COLORS[index]}
                        />
                    ))}
                </Pie>

                <Tooltip
                    formatter={(value) => `${value}%`}
                />

                <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{
                        fontSize: "12px",
                    }}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default TopServicesChart