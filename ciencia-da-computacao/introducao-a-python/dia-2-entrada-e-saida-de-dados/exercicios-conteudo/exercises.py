# 1-  Faça um programa que solicite o nome de uma pessoa usuária
# e imprima-o na vertical.
def achronimous():
    user_name = input('Digite seu nome:')
    for letter in user_name:
        print(letter)


# achronimous()

# 2 - Escreva um programa que receba vários números naturais e calcule
# a soma desses valores. Caso algum valor da entrada seja inválido
# (por exemplo uma letra),
# uma mensagem deve ser exibida na saída de erros no seguinte formato:
# “Erro ao somar valores{valor} é um valor inválido”.
# Ao final, você deve imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que
# separe-os com um espaço.
# Receba os valores no formato str e utilize o método split para pegar cada
# valor separado.
# O método isdigit, embutido no tipo str, pode ser utilizado para verificar se
# a string corresponde a um número natural.


def sum_numbers():
    numbers = input(
        "Digite os numeros desejados para soma separando-os por espaço:"
    ).split(' ')
    numbers_array = []
    for number in numbers:
        if number.isdigit():
            numbers_array.append(int(number))
        else:
            print("Erro ao somar os valores,", end=" ")
            return print(f"{number} é um valor inválido")

    print(sum(numbers_array))


# sum_numbers()


# Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

def disapproved_students():
    disapproved = []
    with open("students.txt") as students:
        for line in students:
            student = line
            student = student.split(' ')
            if int(student[1]) < 6:
                disapproved.append(student[0] + '\n')

    with open("aproved_students.txt", mode="w") as not_approved_students:
        not_approved_students.writelines(disapproved)


disapproved_students()
