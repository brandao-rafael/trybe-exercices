# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares existem
# em uma sequência numérica (1 a n).


def count_pair(number):
    counter = 0
    for n in range(number):
        if n > 1 and n % 2 == 0:
            counter += 1
    return counter


# 🚀 Exercício 2:
# Transforme o algoritmo criado acima em recursivo.
def recursive_count_pair(number):
    if number == 1:
        return 0
    if number % 2 == 0:
        return 1 + recursive_count_pair(number - 1)
    return recursive_count_pair(number - 1)


# 🚀 Exercício 3:
# Crie um algoritmo recursivo que encontre, em uma lista, o maior número
# inteiro. // feito acompanhando o video do gabarito
def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho - 1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))


# 🚀 Exercício 4:
# Escreva um algoritmo recursivo para encontrar o máximo divisor comum
# (mdc) de dois inteiros.
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)
