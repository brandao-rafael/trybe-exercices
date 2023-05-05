from linked_list import LinkedList


class Queue:
    def __init__(self):
        self._data = LinkedList()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.remove_first()

    def peek(self):
        return self._data.get_element_at(0)

    def __str__(self):
        str_items = ""
        for i, _ in enumerate(self._data):
            value = self._data.get_element_at(i)
            str_items += str(value)
            if i + 1 < len(self._data):
                str_items += ", "

        return "Queue(" + str_items + ")"
