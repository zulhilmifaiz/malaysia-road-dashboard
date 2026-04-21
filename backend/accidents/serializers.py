from rest_framework import serializers


class ByYearSerializer(serializers.Serializer):
    year = serializers.IntegerField()
    crashes = serializers.IntegerField()
    deaths = serializers.IntegerField()


class ByInjuryTypeSerializer(serializers.Serializer):
    year = serializers.IntegerField()
    deaths = serializers.IntegerField()
    serious = serializers.IntegerField()
    slight = serializers.IntegerField()


class SummarySerializer(serializers.Serializer):
    total_crashes = serializers.IntegerField()
    peak_year = serializers.IntegerField()
    peak_year_crashes = serializers.IntegerField()
    avg_fatality_rate = serializers.FloatField()
    years_covered = serializers.CharField()
