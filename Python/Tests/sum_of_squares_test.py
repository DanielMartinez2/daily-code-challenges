from sum_of_squares import sum_of_squares
import pytest

def test_sum_of_squares():
    assert sum_of_squares(0) == 0

def test_sum_of_squares_positive_integers():
    assert sum_of_squares(10) == 385

def test_sum_of_squares_negative_integer():
    with pytest.raises(ValueError):
        sum_of_squares(-5)

def test_sum_of_squares_non_integer():
    with pytest.raises(TypeError):
        sum_of_squares("not an integer")

def test_sum_of_squares_large_integer():
    assert sum_of_squares(100) == 338350

def test_sum_of_squares_float():
    with pytest.raises(TypeError):
        sum_of_squares(5.5)