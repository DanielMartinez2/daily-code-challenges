'''Matrix Rotate

Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:
1 	2
3 	4

You should return [[3, 1], [4, 2]], which looks like this:
3 	1
4 	2
'''
'''Matrix Rotate

Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:
1 	2
3 	4

You should return [[3, 1], [4, 2]], which looks like this:
3 	1
4 	2
'''
def rotate(matrix):
    if not isinstance(matrix, list):
        raise TypeError("Matrix must be a list")

    if not all(isinstance(row, list) for row in matrix):
        raise TypeError("Each row must be a list")
    #verifies if its a square matrix
    if matrix:
        row_length = len(matrix[0])

        if any(len(row) != row_length for row in matrix):
            raise ValueError("All rows must have the same length")

    res = []
    dictionary = {}

    for i in range(len(matrix) - 1, -1, -1):
        for j in range(len(matrix[i])):

            if j in dictionary:
                dictionary[j].append(matrix[i][j])
            else:
                dictionary[j] = [matrix[i][j]]

    for value in dictionary.values():
        res.append(value)

    return res