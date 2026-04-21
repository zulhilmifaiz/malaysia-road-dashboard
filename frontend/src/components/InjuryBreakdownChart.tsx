"use client"

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"
import type { InjuryRow } from "@/types"

export default function InjuryBreakdownChart({ data }: { data: InjuryRow[] }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-white text-lg font-semibold mb-4">Injury Breakdown by Year</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 4, right: 20, left: 10, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="year" stroke="#94a3b8" tick={{ fontSize: 11 }} />
          <YAxis
            stroke="#94a3b8"
            tick={{ fontSize: 11 }}
            tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: 8 }}
            labelStyle={{ color: "#e2e8f0" }}
            formatter={(v, name) => [(v as number).toLocaleString(), name as string]}
          />
          <Legend wrapperStyle={{ color: "#94a3b8", fontSize: 12 }} />
          <Bar dataKey="deaths" name="Deaths" fill="#f87171" radius={[2, 2, 0, 0]} />
          <Bar dataKey="serious" name="Serious Injury" fill="#fb923c" radius={[2, 2, 0, 0]} />
          <Bar dataKey="slight" name="Slight Injury" fill="#38bdf8" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
