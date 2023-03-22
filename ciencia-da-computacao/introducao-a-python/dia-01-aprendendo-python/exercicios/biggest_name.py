def biggest_name(names: list[str]) -> str:
    biggest = ''
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest
