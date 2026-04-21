"use client"

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"
import type { YearlyRow } from "@/types"

export default function YearlyTrendChart({ data }: { data: YearlyRow[] }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4">Road Crashes by Year</h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 4, right: 20, left: 10, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="year" stroke="#94a3b8" tick={{ fontSize: 12 }} />
          <YAxis
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: 8 }}
            labelStyle={{ color: "#e2e8f0" }}
            formatter={(v, name) => [(v as number).toLocaleString(), name as string]}
          />
          <Legend wrapperStyle={{ color: "#94a3b8", fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="crashes"
            stroke="#38bdf8"
            strokeWidth={2}
            dot={false}
            name="Crashes"
          />
          <Line
            type="monotone"
            dataKey="deaths"
            stroke="#f87171"
            strokeWidth={2}
            dot={false}
            name="Deaths"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
