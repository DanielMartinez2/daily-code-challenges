from tribonacci_sequence import tribonacci_sequence
import pytest


# --------------------------------
# Comportamento normal
# --------------------------------

def test_normal_behaviour():
    result = tribonacci_sequence([0, 0, 1], 10)

    assert result == [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]


def test_accepts_different_start_sequence():
    result = tribonacci_sequence([1, 1, 1], 7)

    assert result == [1, 1, 1, 3, 5, 9, 17]


def test_accepts_negative_starting_numbers():
    result = tribonacci_sequence([-1, 0, 0], 6)

    assert result == [-1, 0, 0, -1, -1, -2]


def test_accepts_float_starting_numbers():
    result = tribonacci_sequence([0.5, 1.0, 1.5], 5)

    assert result == [0.5, 1.0, 1.5, 3.0, 5.5]
# --------------------------------
# Testes do exercício oficial
# --------------------------------

@pytest.mark.parametrize(
    "start_sequence, length, expected",
    [
        (
            [0, 0, 1],
            20,
            [
                0, 0, 1, 1, 2, 4, 7, 13, 24, 44,
                81, 149, 274, 504, 927, 1705,
                3136, 5768, 10609, 19513
            ]
        ),
        (
            [21, 32, 43],
            1,
            [21]
        ),
        (
            [0, 0, 1],
            0,
            []
        ),
        (
            [10, 20, 30],
            2,
            [10, 20]
        ),
        (
            [10, 20, 30],
            3,
            [10, 20, 30]
        ),
        (
            [123, 456, 789],
            8,
            [123, 456, 789, 1368, 2613, 4770, 8751, 16134]
        ),
    ]
)
def test_official_cases(start_sequence, length, expected):
    assert tribonacci_sequence(start_sequence, length) == expected
# --------------------------------
# Casos de borda
# --------------------------------

@pytest.mark.parametrize(
    "length, expected",
    [
        (0, []),
        (1, [0]),
        (2, [0, 0]),
        (3, [0, 0, 1]),
        (4, [0, 0, 1, 1]),
    ]
)
def test_boundary_lengths(length, expected):
    assert tribonacci_sequence([0, 0, 1], length) == expected


def test_does_not_modify_start_sequence():
    start = [0, 0, 1]

    tribonacci_sequence(start, 10)

    assert start == [0, 0, 1]


# --------------------------------
# Tipo de start_sequence
# --------------------------------

@pytest.mark.parametrize(
    "invalid_start",
    [
        "not a list",
        123,
        3.14,
        None,
        True,
        (0, 0, 1),
        {0, 1},
        {"a": 1},
    ]
)
def test_start_sequence_must_be_list(invalid_start):
    with pytest.raises(TypeError):
        tribonacci_sequence(invalid_start, 10)


# --------------------------------
# Tipos dos elementos da lista
# --------------------------------

@pytest.mark.parametrize(
    "invalid_start",
    [
        [0, 0, "1"],
        [0, None, 1],
        [0, [1], 1],
        [0, {"value": 1}, 1],
        [0, (1,), 1],
        [0, True, 1],
        [False, 0, 1],
    ]
)
def test_start_sequence_must_contain_only_numbers(invalid_start):
    with pytest.raises(TypeError):
        tribonacci_sequence(invalid_start, 10)


# --------------------------------
# Tamanho da sequência inicial
# --------------------------------

@pytest.mark.parametrize(
    "invalid_start",
    [
        [],
        [0],
        [0, 1],
        [0, 0, 1, 2],
        [0, 0, 0, 0, 0],
    ]
)
def test_start_sequence_must_have_exactly_three_elements(invalid_start):
    with pytest.raises(ValueError):
        tribonacci_sequence(invalid_start, 5)


# --------------------------------
# Tipo de length
# --------------------------------

@pytest.mark.parametrize(
    "invalid_length",
    [
        "10",
        2.5,
        None,
        True,
        False,
        [10],
        (10,),
        {"length": 10},
    ]
)
def test_length_must_be_integer(invalid_length):
    with pytest.raises(TypeError):
        tribonacci_sequence([0, 0, 1], invalid_length)


# --------------------------------
# Valor de length
# --------------------------------

@pytest.mark.parametrize(
    "invalid_length",
    [
        -1,
        -5,
        -100,
    ]
)
def test_length_cannot_be_negative(invalid_length):
    with pytest.raises(ValueError):
        tribonacci_sequence([0, 0, 1], invalid_length)