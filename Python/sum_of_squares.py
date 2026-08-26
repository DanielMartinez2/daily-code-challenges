"""Sum of Squares
Given an integer n, return the sum of the squares of all integers from 0 to n"""


def sum_of_squares(n):
    if not isinstance(n,int):
        raise TypeError("Must be a integer!")
    if n < 0:
        raise ValueError("Input must be a non-negative integer.")
    #list comprehension    
    return sum([(x**2) for x in range(0,n+1)])