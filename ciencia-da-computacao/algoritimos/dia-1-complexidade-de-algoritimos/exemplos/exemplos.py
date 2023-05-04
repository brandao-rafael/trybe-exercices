def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


meu_array = [1, 2, 3, 4, 5, 6, 7, 8, 4, 9]


def multiply_t_arrays(arr1, arr2, arr3):
    result = []
    iterations = 0
    for n1 in arr1:
        for n2 in arr2:
            for n3 in arr3:
                result.append(n1 * n2 * n3)
                iterations += 1
    print(iterations)
    return result


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while (
        start <= end
    ):  # os índices podem ser no máximo iguais, o início não pode ultrapassar
        # o fim
        print("loop")
        mid = (start + end) // 2  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if target < numbers[mid]:  # se o elemento for menor, atualiza o
            # índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


numbers = [
    2,
    3,
    4,
    10,
    15,
    17,
    20,
    27,
    38,
    40,
    47,
    57,
    67,
    77,
    78,
    79,
    80,
    85,
    90,
    95,
    100,
    150,
]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
