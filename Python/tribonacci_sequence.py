'''Tribonacci Sequence

The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

    Your function should handle sequences of any length greater than or equal to zero.
    If the length is zero, return an empty array.
    Note that the starting numbers are part of the sequence.

'''
def tribonacci_sequence(start_sequence, length):
    if not isinstance(start_sequence,list):
        raise TypeError('Start sequence must be a list')

    if any(not isinstance(x, (int, float)) or isinstance(x, bool) for x in start_sequence):
        raise TypeError("Start sequence must contain only numbers")

    if len(start_sequence)!= 3:
            raise ValueError("Start sequence must have exactly three elements")

    if not isinstance(length,int) or isinstance(length,bool):
        raise TypeError('Length should be a Integer')

    if length < 0:
        raise ValueError("Input must be zero or higher!")    
    
    if length == 0:
            return []

    tabulation = [x for x in start_sequence]

    for i in range(3,length):
        new_value = tabulation[i-3] + tabulation[i-2] + tabulation[i-1]
        tabulation.append(new_value)

    return tabulation[:length]