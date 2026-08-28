from base_check import is_valid_number
import pytest

#each test function should test a specific aspect of the is_valid_number function
def test_is_valid_number():
    # Test valid numbers in different bases
    assert is_valid_number("1010", 2) 
    assert is_valid_number("7F", 16) 
    assert is_valid_number("Z", 36) 
    assert is_valid_number("123", 10)
def test_is_valid_number_is_case_insensitive():
    assert is_valid_number("7F", 16)
    assert is_valid_number("7f", 16)
    assert is_valid_number("AbCd", 16)
    assert is_valid_number("abcd", 16)
    assert is_valid_number("z", 36)

def test_returns_false_for_invalid_digits():
    assert not is_valid_number("102", 2)
    assert not is_valid_number("Ga2", 16)
    assert not is_valid_number("1Z", 10)

def test_is_empty_string() :
    # Test empty string
    assert not is_valid_number("", 10) 

def test_is_valid_number_invalid_inputs():
    # Test invalid base values
    with pytest.raises(ValueError):
        is_valid_number("123", 1)
    with pytest.raises(ValueError):
        is_valid_number("123", 37)

def test_is_valid_number_non_string_inputs():
    # Test non-string input for n
    with pytest.raises(TypeError):
        is_valid_number(123, 10)

def test_is_valid_number_non_integer_base():
    # Test non-integer input for base
    with pytest.raises(TypeError):
        is_valid_number("123", "10")

def test_base_10_accepts_only_digits_0_to_9():
    assert is_valid_number("9876543210", 10)
    assert not is_valid_number("A", 10)


def test_base_11_accepts_a_but_not_b():
    assert is_valid_number("A", 11)
    assert is_valid_number("a", 11)
    assert not is_valid_number("B", 11)

def test_base_2_boundary():
    assert is_valid_number("0", 2)
    assert is_valid_number("1", 2)
    assert not is_valid_number("2", 2)


def test_base_36_boundary():
    assert is_valid_number("Z", 36)
    assert is_valid_number("z", 36)

def test_rejects_non_alphanumeric_characters():
    assert not is_valid_number("12 34", 10)
    assert not is_valid_number("12-34", 10)
    assert not is_valid_number("FF!", 16)

def test_raises_type_error_for_float_base():
    with pytest.raises(TypeError):
        is_valid_number("101", 2.0)