import pytest

from matrix_rotation import rotate


# --------------------------------
# Casos oficiais do exercício
# --------------------------------

@pytest.mark.parametrize(
    "matrix, expected",
    [
        (
            [[1]],
            [[1]],
        ),
        (
            [[1, 2], [3, 4]],
            [[3, 1], [4, 2]],
        ),
        (
            [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            [[7, 4, 1], [8, 5, 2], [9, 6, 3]],
        ),
        (
            [[0, 1, 0], [1, 0, 1], [0, 0, 0]],
            [[0, 1, 0], [0, 0, 1], [0, 1, 0]],
        ),
    ],
)
def test_official_cases(matrix, expected):
    assert rotate(matrix) == expected


# --------------------------------
# Funcionamento normal
# --------------------------------

def test_rotates_rectangular_matrix():
    assert rotate(
        [[1, 2, 3], [4, 5, 6]]
    ) == [
        [4, 1],
        [5, 2],
        [6, 3],
    ]


def test_rotates_matrix_with_negative_numbers():
    assert rotate(
        [[-1, -2], [-3, -4]]
    ) == [
        [-3, -1],
        [-4, -2],
    ]


def test_rotates_matrix_with_repeated_values():
    assert rotate(
        [[1, 1], [2, 2]]
    ) == [
        [2, 1],
        [2, 1],
    ]


# --------------------------------
# Casos de borda
# --------------------------------

def test_empty_matrix():
    assert rotate([]) == []


def test_single_row_matrix():
    assert rotate(
        [[1, 2, 3]]
    ) == [
        [1],
        [2],
        [3],
    ]


def test_single_column_matrix():
    assert rotate(
        [[1], [2], [3]]
    ) == [
        [3, 2, 1],
    ]


def test_does_not_modify_original_matrix():
    matrix = [[1, 2], [3, 4]]
    original = [[1, 2], [3, 4]]

    rotate(matrix)

    assert matrix == original


# --------------------------------
# Entradas inválidas
# --------------------------------

@pytest.mark.parametrize(
    "invalid_matrix",
    [
        None,
        123,
        3.14,
        "matrix",
        True,
        (1, 2, 3),
        {"a": 1},
    ],
)
def test_matrix_must_be_a_list(invalid_matrix):
    with pytest.raises(TypeError):
        rotate(invalid_matrix)


@pytest.mark.parametrize(
    "invalid_matrix",
    [
        [1, 2, 3],
        [[1, 2], 3],
        ["abc"],
        [[1, 2], (3, 4)],
    ],
)
def test_each_row_must_be_a_list(invalid_matrix):
    with pytest.raises(TypeError):
        rotate(invalid_matrix)


@pytest.mark.parametrize(
    "invalid_matrix",
    [
        [[1, 2], [3]],
        [[1], [2, 3]],
        [[1, 2, 3], [4, 5]],
    ],
)
def test_rows_must_have_same_length(invalid_matrix):
    with pytest.raises(ValueError):
        rotate(invalid_matrix)
