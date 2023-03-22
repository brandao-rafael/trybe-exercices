# import random

# # escolhe um número aleatório entre 1 e 10
# random_number = random.randint(1, 10)
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(input("Qual o seu palpite? "))
#     # pergunte a pessoa usuária um número

# print("O número sorteado era: ", guess)

# import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)

import json  # json é um modulo que vem embutido, porém precisamos importá-lo
import sys


ERR = "Arquivo não encontrado"
print(f"Erro aconteceu: {ERR}", file=sys.stderr)

x = 5
y = 3
# {x / y:.2f} O que vem após os dois pontos são formatadores,
# como nesse exemplo, duas casas decimais (.2f).
print(f"{x} / {y} = {x / y:.2f}")
print(f"{x:.^3}")  # saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos


a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

# Quando um * está presente no desempacotamento,
# os valores são desempacotados em formato de lista.
head, *tail = (1, 2, 3)
print(head)  # saída: 1
print(tail)  # saída: [2, 3]


# ao abrir um arquivo para escrita, um novo arquivo
# é criado mesmo que ele já exista, sobrescrevendo o antigo.
file = open("arquivo.txt", mode="w")
file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

print("Túlio 22", file=file)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close()


# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo


# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(line)  # não esqueça que a quebra de linha também é
    # um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo

# escrita
file = open("arquivo.dat", mode="wb")
# o prefixo b em uma string indica que seu valor está codificado em bytes
file.write(b"C\xc3\xa1ssio 30")
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo


while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")


try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")


# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no
# contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)


with open("pokemons.json") as file:
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista

# leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# abre o arquivo para escrita
with open("grass_pokemons.json", "w") as file:
    # escreve no arquivo já transformando em formato json a estrutura
    json.dump(grass_type_pokemons, file)
