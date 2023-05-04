def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")


iterative_countdown(5)


def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact


iterative_factorial(5)


def fibonacci(num):  # nome da função e parâmetro
    if num <= 1:  # condição de parada
        return num
    else:
        return fibonacci(num - 2) + fibonacci(
            num - 1
        )  # chamada de si mesma com um novo valor
