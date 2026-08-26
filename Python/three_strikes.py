"""3 Strikes

Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
"""
def squares_with_three(n):
    if not isinstance(n,int):
        raise TypeError("Must be a integer!")
    if n < 1 or n >10000:
        raise ValueError("Pick a number betwenn 1 and 10000.")
    has_three = 0
    for i in range(0,n):
        sqr = i**2
        if '3' in str(sqr):
            has_three += 1
    
    return has_three
