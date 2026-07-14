import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
    { category: "Pomadas", sales: 1200 },
    { category: "Shampoos", sales: 850 },
    { category: "Óleos", sales: 620 },
    { category: "Acessórios", sales: 430 },
]

function SalesCategoryChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 10,
                    right: 8,
                    left: -15,
                    bottom: 0,
                }}
            >
                <CartesianGrid
                    strokeDasharray="4 4"
                    stroke="rgba(148, 163, 184, .15)"
                    vertical={false}
                />

                <XAxis
                    dataKey="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill: "#94a3b8",
                        fontSize: 11,
                    }}
                />

                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill: "#94a3b8",
                        fontSize: 11,
                    }}
                    tickFormatter={(value) => {
                        if(value >= 1000){
                            return `${(value / 1000).toFixed(1)}k`
                        }

                        return value
                    }}
                />

                <Tooltip
                    formatter={(value) =>
                        `R$ ${value.toLocaleString("pt-BR")}`
                    }
                />

                <Bar
                    dataKey="sales"
                    fill="#3b82f6"
                    radius={[6, 6, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SalesCategoryChart