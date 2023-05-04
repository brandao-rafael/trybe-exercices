def countdown(n):
    if n == 0:
        print("FIM")
    else:
        print(n)
        countdown(n - 1)  # chamada recursiva


countdown(5)


def factorial(n):
    if n <= 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo


print(factorial(5))


# exercicio de fixação
def sumatory(n):
    if n == 0:
        print("fim")
    else:
        print(n)
        return n + sumatory(n - 1)
