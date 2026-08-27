'''Magic Square Solver

Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.
'''
def solve_magic_square(grid):    
    #check if grid is 3x3
    if len(grid) != 3 or any(len(line) != 3 for line in grid):
        raise ValueError("grid must be 3x3")
    #check if grid has only integers or float
    if any(not isinstance(num, (int, float)) for line in grid for num in line):
        raise ValueError("grid must contain only integers or floats")
    #discover missing number
    line_sum = []
    miss_line = None
    index = None
    for i,line in enumerate(grid):          
        if 0 in line:
            miss_line = i
            index = line.index(0)
        else:
            line_sum.append(sum(line))
    if line_sum[0] != line_sum[1]:
        return "impossible"
    if miss_line is None or index is None:
        return "impossible"
    correct_sum = line_sum[0]
    #in a copy replace missing number with possible number
    square_copy = [line.copy() for line in grid]    
    #correct sum is repeated elem in line_sum    
    #Possible num = correct_sum - sum(square_copy[miss_line])    
    num = correct_sum - sum(grid[miss_line])
    square_copy[miss_line][index] = num    
    #check sum col  if false "impossible"
    if any(sum(col) != correct_sum for col in zip(*square_copy)):
        return "impossible"
    #check sum diagonal if false "impossible"
    if square_copy[0][0] + square_copy[1][1] + square_copy[2][2] != correct_sum:
        return 'impossible'
    #check sum secondary diagonal if false "impossible"
    if square_copy[0][2] + square_copy[1][1] + square_copy[2][0] != correct_sum:
        return 'impossible'
    return num
print(solve_magic_square([[2, 7, 6], [9, 0, 1], [4, 3, 8]]))
print(solve_magic_square([[0, 14, 12], [18, 10, 2], [8, 6, 16]]))
print(solve_magic_square([[12, 17, 16], [19, 0, 10], [14, 13, 18]]))
print(solve_magic_square([[15, 35, 31], [43, 27, 11], [23, 19, 0]]))
print(solve_magic_square([[26, 41, 14], [47, 35, 0], [32, 29, 44]]))