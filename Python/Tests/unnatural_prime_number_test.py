from unnatural_prime_number import is_unnatural_prime;
import pytest


# comportamento normal

def test_normal_behavior():
    result = is_unnatural_prime(4)

    assert result == False


# caso limite

def test_negative_number_case():
    result = is_unnatural_prime(-11)

    assert result == True

def test_zero_case():
    result = is_unnatural_prime(0)

    assert result == False    

def test_one_case():
    result = is_unnatural_prime(1)

    assert result == False

def test_boolean_case():
    with pytest.raises(TypeError):
        is_unnatural_prime(True)

# entrada inválida

def test_invalid_input():
    with pytest.raises(TypeError):
        is_unnatural_prime("a")

@pytest.mark.parametrize(
    "input_value",
    [
        "abc",
        [1, 2, 3],
        (1, 23),
        " ",
        {"f": "assdas"},
        2.5,
        None,
        True,
        False,
    ]
)
def test_multiple_invalid_cases(input_value):
    with pytest.raises(TypeError):
        is_unnatural_prime(input_value)

# vários casos semelhantes

@pytest.mark.parametrize(
    "input_value, expected",
    [
        (1, False),
        (-1, False),
        (19, True),
        (-23, True),
        (97, True),
        (-61, True),
        (99, False),
        (-44, False),
    ]
)
def test_multiple_cases(
    input_value,
    expected
):
    assert is_unnatural_prime(input_value) == expected

@pytest.mark.parametrize(
    "input_value, expected",
    [
        (0, False),
        (1, False),
        (-1, False),

        (2, True),
        (-2, True),

        (3, True),
        (-3, True),

        (19, True),
        (-23, True),
        (97, True),
        (-61, True),

        (4, False),
        (-4, False),
        (49, False),
        (-49, False),
        (99, False),
        (-44, False),
    ]
)
def test_multiple_cases_extended(input_value, expected):
    assert is_unnatural_prime(input_value) == expected