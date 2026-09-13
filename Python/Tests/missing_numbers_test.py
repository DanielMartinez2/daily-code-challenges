import pytest

from missing_numbers import find_missing_numbers


# --------------------------------
# Casos oficiais do exercício
# --------------------------------

@pytest.mark.parametrize(
    "arr, expected",
    [
        (
            [1, 3, 5],
            [2, 4],
        ),
        (
            [1, 2, 3, 4, 5],
            [],
        ),
        (
            [1, 10],
            [2, 3, 4, 5, 6, 7, 8, 9],
        ),
        (
            [10, 1, 10, 1, 10, 1],
            [2, 3, 4, 5, 6, 7, 8, 9],
        ),
        (
            [3, 1, 4, 1, 5, 9],
            [2, 6, 7, 8],
        ),
        (
            [
                1, 2, 3, 4, 5, 7, 8, 9, 10,
                12, 6, 8, 9, 3, 2, 10, 7, 4
            ],
            [11],
        ),
    ],
)
def test_official_cases(arr, expected):
    assert find_missing_numbers(arr) == expected


# --------------------------------
# Casos de borda
# --------------------------------

def test_single_element():
    assert find_missing_numbers([1]) == []


def test_single_largest_element():
    assert find_missing_numbers([5]) == [1, 2, 3, 4]


def test_unsorted_array_with_no_missing_numbers():
    assert find_missing_numbers([5, 3, 1, 4, 2]) == []


def test_unsorted_array_with_missing_numbers():
    assert find_missing_numbers([5, 1, 3]) == [2, 4]


def test_all_values_are_duplicates():
    assert find_missing_numbers([1, 1, 1, 1]) == []


def test_duplicates_do_not_affect_result():
    assert find_missing_numbers(
        [1, 2, 2, 4, 4, 6]
    ) == [3, 5]


def test_missing_number_at_beginning_of_range():
    assert find_missing_numbers([2, 3, 4]) == [1]


def test_multiple_missing_numbers_at_beginning():
    assert find_missing_numbers([4, 5]) == [1, 2, 3]


def test_result_is_in_ascending_order():
    result = find_missing_numbers([10, 3, 1, 7])

    assert result == [2, 4, 5, 6, 8, 9]


def test_does_not_modify_original_array():
    arr = [5, 1, 3]
    original = arr.copy()

    find_missing_numbers(arr)

    assert arr == original


# --------------------------------
# Entradas inválidas - tipo do argumento
# --------------------------------

@pytest.mark.parametrize(
    "invalid_input",
    [
        "123",
        123,
        3.14,
        None,
        True,
        False,
        (1, 2, 3),
        {1, 2, 3},
        {"a": 1},
    ],
)
def test_input_must_be_a_list(invalid_input):
    with pytest.raises(TypeError):
        find_missing_numbers(invalid_input)


# --------------------------------
# Entradas inválidas - elementos
# --------------------------------

@pytest.mark.parametrize(
    "invalid_input",
    [
        [1, 2, "3"],
        [1, 2, 3.5],
        [1, None, 3],
        [1, True, 3],
        [False, 2, 3],
        [1, [2], 3],
        [1, {"number": 2}, 3],
    ],
)
def test_all_elements_must_be_integers(invalid_input):
    with pytest.raises(TypeError):
        find_missing_numbers(invalid_input)


# --------------------------------
# Lista vazia
# --------------------------------

def test_empty_list_raises_value_error():
    with pytest.raises(ValueError):
        find_missing_numbers([])