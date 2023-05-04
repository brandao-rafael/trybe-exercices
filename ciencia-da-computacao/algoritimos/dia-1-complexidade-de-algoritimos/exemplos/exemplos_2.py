def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1  # linear 0(n)

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2  # quadratica 0(n²)

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3  # cubica 0(n³)

    return number1, number2, number3


# (n + n² + n³) = n³
n1, n2, n3 = calculations(100)
print(f"{n1}, {n2}, {n3}")
