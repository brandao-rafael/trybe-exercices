from Eletrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador = Secador("Preto", "500", "127", "450")
batedeira = Batedeira("Branco", "500", "127", "450")
maquina_de_lavar = MaquinaDeLavar("prata", "1500", "127", "1200")

print(f'''O secador {secador.cor} custa {secador.preco}''')
print(f'''a batedeira {batedeira.cor} custa {batedeira.preco}''')
print(
    f'''
      A maquina de lavar {maquina_de_lavar.cor} custa {maquina_de_lavar.preco}
    '''
)
