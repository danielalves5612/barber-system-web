import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

const data = [
    {name: "Corte", value: 45},
    {name: "Barba", value: 30},
    {name: "Corte + barba", value: 20},
    {name: "Outros", value: 5},
]

const COLORS = [
    "#1d4ed8",
    "#2563eb",
    "#3b82f6",
    "#64748b",
]

function TopServicesChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={54}
                    outerRadius={78}
                    paddingAngle={4}
                >
                    {data.map((item, index) => (
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