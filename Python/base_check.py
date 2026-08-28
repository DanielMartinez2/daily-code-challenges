"""Base Check

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

    The string may contain integers, and uppercase or lowercase characters.
    The check should be case-insensitive.
    The base can be any number 2-36.
    A number is valid if every character is a valid digit in the given base.
    Example of valid digits for bases:
        Base 2: 0-1
        Base 8: 0-7
        Base 10: 0-9
        Base 16: 0-9 and A-F
        Base 36: 0-9 and A-Z

"""
def valid_dict():
    valid_digits = dict()
    for i in range(2,37):
        if i < 10:
            valid_digits[i] = [str(x) for x in range(i)]
        else:
            valid_digits[i] = [str(x) for x in range(10)] + [chr(y) for y in range(65,i+55)]    
    return valid_digits
def is_valid_number(n, base):
    if not isinstance(n, str):
        raise TypeError("First input must be a string!")
    if not isinstance(base, int):
        raise TypeError("Base must be a integer!")
    if base < 2 or base > 36:
        raise ValueError("Base must be a integer between 2 and 36")
    if n == "": return False
    valid_base_dict = valid_dict()    
    for letter in n:
        if letter.upper() not in valid_base_dict[base]:            
            return False
    return True