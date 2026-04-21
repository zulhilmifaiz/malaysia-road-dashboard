import pandas as pd
from django.conf import settings


def _load():
    df = pd.read_excel(settings.DATA_FILE, sheet_name="1997-2017", header=1)
    df.columns = [
        "year", "vehicles", "population", "crashes", "deaths",
        "serious", "slight", "idx_vehicles", "idx_pop", "idx_vkt",
    ]
    # Keep only rows where year is a plain integer (drops title row and footer)
    df = df[df["year"].apply(lambda x: str(x).strip().isdigit())].copy()
    df["year"] = df["year"].astype(int)
    # Coerce numeric cols — rows with "TBA" or other strings become NaN then get dropped
    for col in ("crashes", "deaths", "serious", "slight"):
        df[col] = pd.to_numeric(df[col], errors="coerce")
    df = df.dropna(subset=["crashes", "deaths", "serious", "slight"])
    df = df.astype({"crashes": int, "deaths": int, "serious": int, "slight": int})
    df = df[df["year"] < 2017]
    return df.reset_index(drop=True)


DATA = _load()
