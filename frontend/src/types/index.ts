export type YearlyRow = { year: number; crashes: number; deaths: number }

export type InjuryRow = { year: number; deaths: number; serious: number; slight: number }

export type Summary = {
  total_crashes: number
  peak_year: number
  peak_year_crashes: number
  avg_fatality_rate: number
  years_covered: string
}
