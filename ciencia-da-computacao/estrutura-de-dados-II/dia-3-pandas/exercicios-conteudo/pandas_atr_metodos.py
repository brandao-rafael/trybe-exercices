import pandas as pd


preco_eletrodomesticos = pd.DataFrame({
    "eletrodomesticos": [
        "geladeira",
        "fogao",
        "liquidificador",
        "airfryer",
        "batedeira",
        "playstation5"
    ],
    "preco": [3000, 1200, 200, 400, 150, 4500]
})

# print(f"shape = {preco_eletrodomesticos.shape}")
# shape = (6, 2)

# print(f"columns = {preco_eletrodomesticos.columns}")
# columns = Index(['eletrodomesticos', 'preco'], dtype='object')

# print(f"describe = {preco_eletrodomesticos.describe()}")
# describe =              preco
# count     6.000000
# mean   1575.000000
# std    1790.460835
# min     150.000000
# 25%     250.000000
# 50%     800.000000
# 75%    2550.000000
# max    4500.000000

# print(f"info = {preco_eletrodomesticos.info()}")
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 6 entries, 0 to 5
# Data columns (total 2 columns):
#  #   Column            Non-Null Count  Dtype 
# ---  ------            --------------  ----- 
#  0   eletrodomesticos  6 non-null      object
#  1   preco             6 non-null      int64 
# dtypes: int64(1), object(1)
# memory usage: 224.0+ bytes
# info = None

# print(f"head = {preco_eletrodomesticos.head()}")
# head =   eletrodomesticos  preco
# 0        geladeira   3000
# 1            fogao   1200
# 2   liquidificador    200
# 3         airfryer    400
# 4        batedeira    150

# print(f"tail = {preco_eletrodomesticos.tail()}")
# tail =   eletrodomesticos  preco
# 1            fogao   1200
# 2   liquidificador    200
# 3         airfryer    400
# 4        batedeira    150
# 5     playstation5   4500


situacao_rua = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
}

df_municipios_rua = pd.DataFrame(situacao_rua)

print(f"linhas e colunas {df_municipios_rua.shape}")

print(f"valores nulos: {df_municipios_rua.info()}")

print(f"medio situacao de rua por regiao {df_municipios_rua.describe()}")

