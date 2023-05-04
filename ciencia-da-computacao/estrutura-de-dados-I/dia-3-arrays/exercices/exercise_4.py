# Exercício 4
# Você têm dois arrays de números inteiros que representam:

# I - instantes de entrada e saídas em uma biblioteca II - um número que
# represente um instante a ser buscado.

# Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
# Considere que todo estudante entrou e saiu da biblioteca.

def students_library(entry: list[int], exit: list[int], s_hour: int):
    counter = 0
    for i, _ in enumerate(entry):
        if entry[i] <= s_hour <= exit[i]:
            counter += 1
    return counter

# Complexity = O(n)
