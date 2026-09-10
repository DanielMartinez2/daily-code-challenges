from array_diff import array_diff
import pytest


# --------------------------------
# Casos oficiais do exercício
# --------------------------------

@pytest.mark.parametrize(
    "arr1, arr2, expected",
    [
        (
            ["apple", "banana"],
            ["apple", "banana", "cherry"],
            ["cherry"],
        ),
        (
            ["apple", "banana", "cherry"],
            ["apple", "banana"],
            ["cherry"],
        ),
        (
            ["one", "two", "three", "four", "six"],
            ["one", "three", "eight"],
            ["eight", "four", "six", "two"],
        ),
        (
            ["two", "four", "five", "eight"],
            ["one", "two", "three", "four", "seven", "eight"],
            ["five", "one", "seven", "three"],
        ),
        (
            ["I", "like", "freeCodeCamp"],
            ["I", "like", "rocks"],
            ["freeCodeCamp", "rocks"],
        ),
    ],
)
def test_official_cases(arr1, arr2, expected):
    assert array_diff(arr1, arr2) == expected


# --------------------------------
# Casos de borda
# --------------------------------

def test_both_arrays_empty():
    assert array_diff([], []) == []


def test_first_array_empty():
    assert array_diff(
        [],
        ["banana", "apple"]
    ) == ["apple", "banana"]


def test_second_array_empty():
    assert array_diff(
        ["banana", "apple"],
        []
    ) == ["apple", "banana"]


def test_identical_arrays():
    assert array_diff(
        ["apple", "banana", "cherry"],
        ["apple", "banana", "cherry"]
    ) == []


def test_arrays_with_no_common_values():
    assert array_diff(
        ["dog", "cat"],
        ["banana", "apple"]
    ) == ["apple", "banana", "cat", "dog"]


def test_single_element_arrays_with_same_value():
    assert array_diff(["apple"], ["apple"]) == []


def test_single_element_arrays_with_different_values():
    assert array_diff(
        ["apple"],
        ["banana"]
    ) == ["apple", "banana"]


# --------------------------------
# Duplicatas
# --------------------------------

def test_duplicate_values_are_returned_only_once():
    assert array_diff(
        ["apple", "apple", "banana"],
        ["banana"]
    ) == ["apple"]


def test_duplicates_in_both_arrays_do_not_affect_result():
    assert array_diff(
        ["apple", "apple", "banana", "banana"],
        ["banana", "banana", "cherry", "cherry"]
    ) == ["apple", "cherry"]


# --------------------------------
# Maiúsculas e minúsculas
# --------------------------------

def test_is_case_sensitive():
    assert array_diff(
        ["Apple"],
        ["apple"]
    ) == ["Apple", "apple"]


def test_same_word_with_same_case_is_removed():
    assert array_diff(
        ["Apple", "banana"],
        ["Apple", "cherry"]
    ) == ["banana", "cherry"]


# --------------------------------
# Ordem alfabética
# --------------------------------

def test_result_is_sorted_alphabetically():
    result = array_diff(
        ["zebra", "dog"],
        ["apple", "cat"]
    )

    assert result == ["apple", "cat", "dog", "zebra"]


# --------------------------------
# Não deve modificar os arrays
# --------------------------------

def test_does_not_modify_original_arrays():
    arr1 = ["one", "two", "three"]
    arr2 = ["one", "four"]

    original_arr1 = arr1.copy()
    original_arr2 = arr2.copy()

    array_diff(arr1, arr2)

    assert arr1 == original_arr1
    assert arr2 == original_arr2


# --------------------------------
# Inputs inválidos - arrays
# --------------------------------

@pytest.mark.parametrize(
    "arr1, arr2",
    [
        ("apple", ["banana"]),
        (123, ["banana"]),
        (None, ["banana"]),
        (True, ["banana"]),
        ({"apple": 1}, ["banana"]),
        (("apple", "banana"), ["banana"]),

        (["apple"], "banana"),
        (["apple"], 123),
        (["apple"], None),
        (["apple"], False),
        (["apple"], {"banana": 1}),
        (["apple"], ("banana",)),
    ],
)
def test_inputs_must_be_lists(arr1, arr2):
    with pytest.raises(TypeError):
        array_diff(arr1, arr2)


# --------------------------------
# Inputs inválidos - elementos
# --------------------------------

@pytest.mark.parametrize(
    "arr1, arr2",
    [
        (["apple", 123], ["banana"]),
        (["apple", None], ["banana"]),
        (["apple", True], ["banana"]),
        (["apple", ["banana"]], ["cherry"]),

        (["apple"], ["banana", 123]),
        (["apple"], ["banana", None]),
        (["apple"], ["banana", False]),
        (["apple"], ["banana", {"x": 1}]),
    ],
)
def test_array_elements_must_be_strings(arr1, arr2):
    with pytest.raises(TypeError):
        array_diff(arr1, arr2)