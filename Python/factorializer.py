"""Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

    The factorial of zero is 1.

"""
def factorial(n):
    if not isinstance(n,int) or isinstance(n,bool):
        raise TypeError("Must be a integer!")    
    if n < 0 or n > 20:
        raise ValueError("Input must be an integer between 0 and 20.")
    tabulation = [1,1]
    for i in range(2,n+1):
        factorial_calc = i * tabulation[-1]
        tabulation.append(factorial_calc)
    
    return tabulation[n]

