"""Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

    The returned array should have the indices in ascending order.

"""

def find_target(arr, target):    
    if not isinstance(arr,list):
        raise TypeError("Must be a list!")
    if not isinstance(target,int):
        raise TypeError("Target must be an integer!")
    result = []
    for index,elem in enumerate(arr):        
        for j in range(index+1,len(arr)):
            if elem + arr[j] == target and elem != arr[j]:
                if elem < arr[j]:
                    result.append(index)  
                    result.append(j)
                else:
                    result.append(j)
                    result.append(index)                      
    return result if result else "Target not found"