# 🚀Exercício 1
# Em um software monitor, o qual verifica a resiliência
# de outro software, precisamos saber o tempo máximo que um software permaneceu
# sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem. Supondo um array que contenha os estados
# coletados por nosso software,
# calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

def check_stability(status: list[int]):
    return status.count(0)


# complexity O(n)
