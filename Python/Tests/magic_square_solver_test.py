from magic_square_solver import solve_magic_square
import pytest

#comportamento normal
def test_normal_behavior():
    grid = [[8, 1, 6], [3, 0, 7], [4, 9, 2]]
    result = solve_magic_square(grid)
    assert result == 5

# caso limite
def test_raises_value_error_when_all_values_are_zero():
    grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    with pytest.raises(ValueError):
        solve_magic_square(grid)
# entradas inválidas
    #grid 2x2
def test_invalid_grid_2x2():
    grid = [[8, 1], [3, 0]]
    with pytest.raises(ValueError):
        solve_magic_square(grid)
    #grid 4x4
def test_invalid_grid_4x4():
    grid = [[8, 1, 6, 3], [3, 0, 7, 4], [4, 9, 2, 5], [5, 2, 9, 6]]
    with pytest.raises(ValueError):
        solve_magic_square(grid)   
    #grid with NaN
def test_invalid_entry_nan():
    grid = [[8, 1, 6], [3, float('nan'), 7], [4, 9, 2]]
    with pytest.raises(TypeError):
        solve_magic_square(grid)
    #grid with Infinity
def test_invalid_entry_infinity():
    grid = [[8, 1, 6], [3, float('inf'), 7], [4, 9, 2]]
    with pytest.raises(TypeError):
        solve_magic_square(grid)
    #grid with boolean
def test_invalid_entry_boolean():
    grid = [[8, 1, 6], [3, True, 7], [4, 9, 2]]
    with pytest.raises(TypeError):
        solve_magic_square(grid)
    #grid with more than one missing number
def test_invalid_grid_multiple_missing():
    grid = [[8, 1, 6], [3, 0, 7], [0, 9, 2]]
    with pytest.raises(ValueError):
        solve_magic_square(grid)
    #grid with no missing number
def test_invalid_grid_no_missing():
    grid = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
    with pytest.raises(ValueError):
        solve_magic_square(grid)
    #grid with string
def test_invalid_grid_string():
    grid = [[8, 1, 6], [3, "5", 7], [4, 9, 2]]
    with pytest.raises(TypeError):
        solve_magic_square(grid)

# vários casos semelhantes
    #testar casos com diferentes posições do 0
@pytest.mark.parametrize( 
    "grid, expected", [
        ([[8, 1, 6], [3, 0, 7], [4, 9, 2]], 5),
        ([[0, 1, 6], [3, 5, 7], [4, 9, 2]], 8),
        ([[8, 1, 0], [3, 5, 7], [4, 9, 2]], 6),
    ]
)
def test_edge_case_different_positions(grid, expected):
    result = solve_magic_square(grid)
    assert result == expected

    #testar casos impossíveis
@pytest.mark.parametrize(
    "grid", [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],  # # Entrada inválida: nenhum zero
        [[0, 0, 0], [0, 0, 0], [0, 0, 0]],  # Todos zeros
    ]
)
def test_edge_case_impossible(grid):
    with pytest.raises(ValueError):
        solve_magic_square(grid)
    #testar casos com float e int
@pytest.mark.parametrize(
    "grid, expected",
    [
        (
            [[8.0, 1, 6],
             [3, 0, 7],
             [4, 9, 2]],
            5
        ),
        (
            [[8, 1.0, 6],
             [3, 0, 7],
             [4, 9, 2]],
            5
        ),
        (
            [[8, 1, 6],
            [0, 5, 7],
            [4, 9, 2]],
            3
        ),
        (
            [[8, 1, 6],
            [3, 5, 7],
            [4, 9, 0]],
            2
        )
    ]
)
def test_accepts_integer_and_float_values(grid, expected):
    assert solve_magic_square(grid) == expected

def test_returns_impossible_when_valid_grid_has_no_solution():
    grid = [
        [12, 17, 16],
        [19, 0, 10],
        [14, 13, 18]
    ]

    assert solve_magic_square(grid) == "impossible"