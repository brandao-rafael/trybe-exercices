# Exercício 3
# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a
# demanda de analisar um array de números inteiros que representam os
# produtos dessa empresa. Verifique quantos produtos formam boas combinações,
# ou seja, quando produto é igual ao outro e seu índice é maior que o anterior.
# Esta combinação pode ser utilizada para modificar os produtos de uma página.
'''WRONG'''
# def count_products(products):
#     products.sort()
#     counter = 0
#     for i in range(len(products) - 1):
#         if products[i] == products[i + 1]:
#             counter += 1
#     return counter

# CORRECT


def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer


# Complexity O(n²)
