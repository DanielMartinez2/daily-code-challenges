from magic_square_solver import solve_magic_square
import pytest


def test_returns_5_for_valid_magic_square():
    grid = [
        [2, 7, 6],
        [9, 0, 1],
        [4, 3, 8]
    ]

    assert solve_magic_square(grid) == 5


def test_returns_4_when_missing_number_is_in_first_position():
    grid = [
        [0, 14, 12],
        [18, 10, 2],
        [8, 6, 16]
    ]

    assert solve_magic_square(grid) == 4


def test_returns_impossible_when_square_cannot_be_completed():
    grid = [
        [12, 17, 16],
        [19, 0, 10],
        [14, 13, 18]
    ]

    assert solve_magic_square(grid) == "impossible"


def test_returns_39_for_valid_magic_square():
    grid = [
        [15, 35, 31],
        [43, 27, 11],
        [23, 19, 0]
    ]

    assert solve_magic_square(grid) == 39


def test_returns_impossible_when_complete_rows_have_different_sums():
    grid = [
        [26, 41, 14],
        [47, 35, 0],
        [32, 29, 44]
    ]

    assert solve_magic_square(grid) == "impossible"

def test_does_not_mutate_original_grid():
    grid = [
        [2, 7, 6],
        [9, 0, 1],
        [4, 3, 8]
    ]

    original = [line.copy() for line in grid]

    solve_magic_square(grid)

    assert grid == original

def test_throws_if_grid_is_not_3_by_3():
    grid = [
        [1, 2],
        [3, 0]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)

#test if grid has only integers or float
def test_throws_if_grid_contains_non_numeric_values():
    grid = [
        [1, 2, 3],
        [4, 'a', 6],
        [7, 8, 0]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)    
        