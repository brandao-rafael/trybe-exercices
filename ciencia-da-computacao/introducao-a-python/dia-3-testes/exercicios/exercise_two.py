# Exercício 2: Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira, a expressão
# MY LOVE significa 69 5683. Claro que existem alguns problemas, uma
# vez que alguns números de telefone não formam uma palavra ou uma frase,
# e os dígitos 1 e 0 não estão associados a nenhuma letra.

# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta
# por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.


def decode_number_by_expression(expression):
    number = ""
    if not 1 < len(expression) <= 30:
        raise ValueError('''incorrect length''')
    for letter in expression:
        if letter in 'ABC':
            number += '2'
        elif letter in 'DEF':
            number += '3'
        elif letter in 'GHI':
            number += '4'
        elif letter in 'JKL':
            number += '5'
        elif letter in 'MNO':
            number += '6'
        elif letter in 'PQRS':
            number += '7'
        elif letter in 'TUV':
            number += '8'
        elif letter in 'WXYZ':
            number += '9'
        elif letter == '-':
            number += '-'
        else:
            number += '1'
    return number


print(decode_number_by_expression('1-HOME-SWEET-HOME'))
