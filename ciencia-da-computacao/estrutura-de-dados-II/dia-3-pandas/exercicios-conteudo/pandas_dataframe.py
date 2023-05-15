import pandas as pd


def calcula_situacao(media):
    return "Aprovado" if media >= 7 else "Reprovado"


dicionario_de_notas = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3]
}


df = pd.DataFrame(dicionario_de_notas)


df["media"] = (df["primeira_nota"] + df["segunda_nota"]) / 2


df["situacao"] = df["media"].apply(calcula_situacao)


# print(df)


dicionario_de_comida = {
    "nome": ["Rafael", "Bruno", "José"],
    "comida_fav": ["lasanha", "rondelli", "lanche"],
    "sobremesa_fav": ["beijinho", "chocolate", "pudim"]
}

df_friends = pd.DataFrame(dicionario_de_comida)

nome = df_friends["nome"]
comida = df_friends["comida_fav"]
sobremesa = df_friends["sobremesa_fav"]

print(nome)
print(comida)
print(sobremesa)
