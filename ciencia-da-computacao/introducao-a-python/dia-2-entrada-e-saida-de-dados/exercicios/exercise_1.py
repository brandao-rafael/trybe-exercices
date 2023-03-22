# Faça um programa que receba um nome e imprima
# o mesmo na vertical em escada invertida.

def print_name(name):
    for removed_letter in range(len(name)):
        for index in range(len(name) - removed_letter):
            print(name[index], end="")
        print()
