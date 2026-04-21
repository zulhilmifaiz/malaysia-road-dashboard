type Props = {
  title: string
  value: string | number
  subtitle?: string
}

export default function KpiCard({ title, value, subtitle }: Props) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-1 shadow-lg">
      <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</p>
      <p className="text-white text-3xl font-bold">{value}</p>
      {subtitle && <p className="text-slate-400 text-sm">{subtitle}</p>}
    </div>
  )
}
