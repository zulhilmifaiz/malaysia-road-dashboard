import { fetchByYear, fetchByInjuryType, fetchSummary } from "@/lib/api"
import KpiCard from "@/components/KpiCard"
import YearlyTrendChart from "@/components/YearlyTrendChart"
import InjuryBreakdownChart from "@/components/InjuryBreakdownChart"

export default async function Home() {
  const [summary, byYear, byInjury] = await Promise.all([
    fetchSummary(),
    fetchByYear(),
    fetchByInjuryType(),
  ])

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-white text-3xl font-bold">Malaysia Road Dashboard</h1>
          <p className="text-slate-400 mt-1 text-sm">
            National road accident statistics · {summary.years_covered}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <KpiCard
            title="Total Crashes"
            value={summary.total_crashes.toLocaleString()}
            subtitle={summary.years_covered}
          />
          <KpiCard
            title="Peak Year"
            value={summary.peak_year}
            subtitle={`${summary.peak_year_crashes.toLocaleString()} crashes`}
          />
          <KpiCard
            title="Avg Fatality Rate"
            value={`${summary.avg_fatality_rate}%`}
            subtitle="Deaths per 100 crashes"
          />
        </div>

        <YearlyTrendChart data={byYear} />
        <InjuryBreakdownChart data={byInjury} />
      </div>
    </main>
  )
}
