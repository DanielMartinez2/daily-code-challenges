'''Array Diff

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

    The returned array should be sorted in alphabetical order.

'''
def array_diff(arr1, arr2):
    if not isinstance(arr1, list) or not isinstance(arr2, list):
        raise TypeError("Both arguments must be lists.")

    if not all(isinstance(item, str) for item in arr1):
        raise TypeError(
            "All elements in the first array must be strings."
        )

    if not all(isinstance(item, str) for item in arr2):
        raise TypeError(
            "All elements in the second array must be strings."
        )

    return sorted(set(arr1) ^ set(arr2))