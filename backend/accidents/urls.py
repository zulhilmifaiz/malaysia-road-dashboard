from django.urls import path
from .views import ByYearView, ByInjuryTypeView, SummaryView

urlpatterns = [
    path("by-year/", ByYearView.as_view()),
    path("by-injury-type/", ByInjuryTypeView.as_view()),
    path("summary/", SummaryView.as_view()),
]
