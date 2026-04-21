from rest_framework.views import APIView
from rest_framework.response import Response
from .data_loader import DATA
from .serializers import ByYearSerializer, ByInjuryTypeSerializer, SummarySerializer


class ByYearView(APIView):
    def get(self, request):
        rows = DATA[["year", "crashes", "deaths"]].sort_values("year").to_dict(orient="records")
        return Response(ByYearSerializer(rows, many=True).data)


class ByInjuryTypeView(APIView):
    def get(self, request):
        rows = DATA[["year", "deaths", "serious", "slight"]].sort_values("year").to_dict(orient="records")
        return Response(ByInjuryTypeSerializer(rows, many=True).data)


class SummaryView(APIView):
    def get(self, request):
        peak_idx = DATA["crashes"].idxmax()
        fatality_rates = DATA["deaths"] / DATA["crashes"] * 100
        summary = {
            "total_crashes": int(DATA["crashes"].sum()),
            "peak_year": int(DATA.loc[peak_idx, "year"]),
            "peak_year_crashes": int(DATA["crashes"].max()),
            "avg_fatality_rate": round(float(fatality_rates.mean()), 2),
            "years_covered": f"{int(DATA['year'].min())}–{int(DATA['year'].max())}",
        }
        return Response(SummarySerializer(summary).data)
