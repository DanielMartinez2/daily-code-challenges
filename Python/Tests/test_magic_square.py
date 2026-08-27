from magic_square_solver import solve_magic_square
import pytest


# ---------------------------------------------------------
# Testes funcionais do desafio
# ---------------------------------------------------------

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


# ---------------------------------------------------------
# Teste de efeito colateral
# ---------------------------------------------------------

def test_does_not_mutate_original_grid():
    grid = [
        [2, 7, 6],
        [9, 0, 1],
        [4, 3, 8]
    ]

    original = [line.copy() for line in grid]

    solve_magic_square(grid)

    assert grid == original


# ---------------------------------------------------------
# Validação da estrutura do grid
# ---------------------------------------------------------

def test_raises_value_error_if_grid_is_not_3_by_3():
    grid = [
        [1, 2],
        [3, 0]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)


# ---------------------------------------------------------
# Validação dos elementos
# ---------------------------------------------------------

def test_raises_type_error_if_grid_contains_non_numeric_values():
    grid = [
        [1, 2, 3],
        [4, "a", 6],
        [7, 8, 0]
    ]

    with pytest.raises(TypeError):
        solve_magic_square(grid)


def test_raises_type_error_if_grid_contains_boolean():
    grid = [
        [1, 2, 3],
        [4, True, 6],
        [7, 8, 0]
    ]

    with pytest.raises(TypeError):
        solve_magic_square(grid)


@pytest.mark.parametrize(
    "invalid_number",
    [
        float("nan"),
        float("inf"),
        float("-inf"),
    ]
)
def test_raises_type_error_if_grid_contains_non_finite_number(
    invalid_number
):
    grid = [
        [1, 2, 3],
        [4, invalid_number, 6],
        [7, 8, 0]
    ]

    with pytest.raises(TypeError):
        solve_magic_square(grid)


# ---------------------------------------------------------
# Validação do número ausente
# ---------------------------------------------------------

def test_raises_value_error_when_there_is_no_missing_number():
    grid = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)


def test_raises_value_error_when_there_are_multiple_missing_numbers():
    grid = [
        [2, 7, 6],
        [9, 0, 1],
        [4, 0, 8]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)


def test_raises_value_error_when_multiple_zeros_are_in_same_row():
    grid = [
        [2, 7, 6],
        [9, 0, 0],
        [4, 3, 8]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)