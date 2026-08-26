'''Unnatural Prime

Given an integer, determine if that number is a prime number or a negative prime number.

    A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
    A negative prime number is the negative version of a positive prime number.
    1 and 0 are not considered prime numbers.

'''

def is_unnatural_prime(n):
    if not isinstance(n,int):
        raise TypeError("Input must be a number")
    
    divisable = 0
    for i in range(2,abs(n)+1):
        if n%i == 0:
            divisable+=1

    return True if divisable == 1 else False
