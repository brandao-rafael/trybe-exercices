# Exercício 2
# Em um jogo de baralho, as cartas estão representadas
# por um array numérico. Para iniciar o jogo, devemos
# embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e
# depois mesclando as duas porções. Por exemplo:

def shuffle(items):
    result = []
    middle = len(items) // 2
    for mid_cheap in range(middle):
        result.extend(items[mid_cheap::middle])
    return result

# complexidade o(n)
