'''Missing Numbers

Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

    The given array may be unsorted and may contain duplicates.
    The returned array should be in ascending order.
    If no integers are missing, return an empty array.

'''
def find_missing_numbers(arr):
    if not isinstance(arr, list):
        raise TypeError("Input must be a list")

    if any(not isinstance(x, int) or isinstance(x, bool) for x in arr):
        raise TypeError("All elements must be integers")

    if arr == []:
        raise ValueError("Input list cannot be empty")

    return [x for x in range(1, max(arr)+1) if x not in set(arr)]    