"""Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

    The returned array should have the indices in ascending order.

"""

def find_target(arr, target):    
    if not isinstance(arr,list):
        raise TypeError("Must be a list!")
    if not isinstance(target,int) or isinstance(target,bool):
        raise TypeError("Target must be an integer!")
    if any(not isinstance(x, (int, float)) or isinstance(x,bool) for x in arr):
        raise TypeError("Must be a number")
    
    for index, elem in enumerate(arr):
        for j in range(index + 1, len(arr)):
            if elem + arr[j] == target and elem != arr[j]:
                return [index, j]

    return "Target not found"