# 🚀 Exercício 1: Escreva um programa que retorne uma
# lista com os valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz”
# ao invés do número.

# Exemplo: 3 -> [1, 2, "Fizz"].


def fizz_buzz(n):
    updated_list = []
    if not isinstance(n, (int)):
        raise TypeError('''type string is not valid to this operation''')
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            updated_list.append("FizzBuzz")
        elif number % 3 == 0:
            updated_list.append("Fizz")
        elif number % 5 == 0:
            updated_list.append("Buzz")
        else:
            updated_list.append(number)
    return updated_list


print(fizz_buzz(20))
