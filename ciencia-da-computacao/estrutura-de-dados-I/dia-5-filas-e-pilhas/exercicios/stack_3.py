from stack import Stack


class Stack3(Stack):
    def __init__(self):
        super().__init__()

    def min_value(self):  # complexity o(n)
        return min(self._data)
