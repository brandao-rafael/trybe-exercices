def longer_no_repeating_substring_len(string):
    if len(string) == 0:
        return 0
    
    substr = set()
    left = 0
    right = 0
    biggest = 1
    
    while right < len(string):
        if string[right] not in substr:
            substr.add(string[right])
            right += 1
            biggest = max(biggest, len(substr))
        else:
            substr.remove(string[left])
            left += 1
    
    return biggest
