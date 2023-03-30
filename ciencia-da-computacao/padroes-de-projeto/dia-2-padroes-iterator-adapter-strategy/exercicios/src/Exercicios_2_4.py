# Dado o código de um baralho e suas cartas, você deve transformá-lo em um
# iterador sequencial que fornece as cartas em sua ordem tradicional,
# começando de <A de copas> até <K de paus>.

from collections.abc import Iterable, Iterator
from abc import ABC, abstractmethod


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self._estrategia)

    def __str__(self) -> str:
        return f"{[carta for carta in self]}"


class BaralhoIterator(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._current = self._estrategia.posicao_inicial

    def __next__(self):
        data = self._cartas[self._current]

        if not data:
            raise StopIteration()

        self._current = self._estrategia.proxima_carta(self._current)
        return data


class EstrategiaIteracao(ABC):
    posicao_inicial = 0

    @abstractmethod
    @classmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    posicao_inicial = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    posicao_inicial = - 1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


baralho_regular = Baralho(EstrategiaRegular())
baralho_inverso = Baralho(EstrategiaReversa())

print(baralho_inverso)
print(baralho_regular)


# gabarito exercicio 4
# from abc import ABC, abstractmethod
# from collections.abc import Iterator, Iterable


# class Carta:
#     def __init__(self, valor, naipe):
#         self.valor = valor
#         self.naipe = naipe

#     def __repr__(self):
#         return "<%s de %s>" % (self.valor, self.naipe)


# class IteradorDoBaralho(Iterator):
#     def __init__(self, cartas, estrategia):
#         self._cartas = cartas
#         self._estrategia = estrategia
#         self._pos = self._estrategia.posicao_inicial

#     def __next__(self):
#         try:
#             carta = self._cartas[self._pos]
#         except IndexError:
#             raise StopIteration()
#         else:
#             self._pos = self._estrategia.proxima_carta(self._pos)
#             return carta


# class EstrategiaIteracao(ABC):
#     posicao_inicial = 0

#     @abstractmethod
#     def proxima_carta(cls, index):
#         raise NotImplementedError


# class EstrategiaRegular(EstrategiaIteracao):
#     posicao_inicial = 0

#     @classmethod
#     def proxima_carta(cls, index):
#         return index + 1


# class EstrategiaReversa(EstrategiaIteracao):
#     posicao_inicial = -1

#     @classmethod
#     def proxima_carta(cls, index):
#         return index - 1


# class Baralho(Iterable):
#     naipes = "copas ouros espadas paus".split()
#     valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

#     def __init__(self, estrategia):
#         self._cartas = [
#             Carta(valor, naipe)
#             for naipe in self.naipes
#             for valor in self.valores
#         ]
#         self.estrategia = estrategia

#     def __len__(self):
#         return len(self._cartas)

#     def __iter__(self):
#         return IteradorDoBaralho(self._cartas, self.estrategia)
    
#     def __str__(self):
#         return f"{[carta for carta in self]}"


# baralho_regular = Baralho(EstrategiaRegular())
# baralho_inverso = Baralho(EstrategiaReversa())
