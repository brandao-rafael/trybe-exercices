import pandas as pd
from sqlalchemy import create_engine
# import pymysql

database_url = "mysql+pymysql://root:19862580@localhost:3306/estudantes"

engine = create_engine(database_url)

db_connection = engine.connect()

df = pd.read_sql("SELECT * FROM notas;", engine)

try:
    df.to_sql(
        name="notas",
        con=engine,
        index=False,
        if_exists='replace'
)
except Exception as error:
    print("ERRO:", error)
else:
    print("Tabela populada")
finally:
    db_connection.close(
    )

print(df.head())
