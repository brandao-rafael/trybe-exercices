class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:

    def __init__(self):
        self._bucket = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10
    
    def insert(self, enployee):
        address = self.get_address(enployee.id_num)
        self._bucket[address].append(enployee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._bucket[address]:
            if item.id_num == id_num:
                return item.name
        return None
    
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._bucket[address] is not None
    
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._bucket[address].name = new_name
        return self._bucket[address].name
    

if __name__ == '__main__':
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    registry = HashMap()
    
    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))
    print(registry.update_value(14, 'Rafael'))
