class MainMemory:
    loaded_memory = []

    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        if not self.loaded_memory[index]:
            return 0
        return float(self.loaded_memory[index])

    def clean(self):
        self.loaded_memory = []
