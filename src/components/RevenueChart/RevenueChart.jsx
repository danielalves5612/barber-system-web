import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts"

const data = [
    { day: "Seg", revenue: 650 },
    { day: "Ter", revenue: 920 },
    { day: "Qua", revenue: 780 },
    { day: "Qui", revenue: 1150 },
    { day: "Sex", revenue: 980 },
    { day: "Sáb", revenue: 1420 },
    { day: "Dom", revenue: 825 },
]

function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.45}
                        />
                        <stop
                            offset="95%"
                            stopColor="#3b82f6"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>

                <CartesianGrid
                    strokeDasharray="4 4"
                    stroke="rgba(148, 163, 184, .15)"
                    vertical={false}
                />

                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill: "#94a3b8",
                        fontSize: 13,
                    }}
                    tickMargin={12}
                />

                <YAxis
                    width={55}
                    axisLine={false}
                    tickLine={false}
                    tick={{
                        fill: "#94a3b8",
                        fontSize: 13,
                    }}
                    tickFormatter={(value) => {
                        if(value >= 1000){
                            return `${(value / 1000).toFixed(1)}k`
                        }

                        return value
                    }}
                    tickMargin={10}
                />

                <Tooltip />

                <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fill="url(#revenueGradient)"
                    dot={{
                        r: 4,
                        fill: "#3b82f6",
                        strokeWidth: 2,
                        stroke: "#0f172a",
                    }}
                    activeDot={{ r: 6 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default RevenueChart