from second_best import get_laptop_cost
import pytest


def test_returns_second_most_expensive_when_within_budget():
    assert get_laptop_cost(
        [1500, 2000, 1800, 1400], 1900
    ) == 1800


def test_ignores_duplicate_prices():
    assert get_laptop_cost(
        [1500, 2000, 2000, 1800, 1400], 1900
    ) == 1800


def test_returns_second_most_expensive_when_budget_is_above_all_prices():
    assert get_laptop_cost(
        [2099, 1599, 1899, 1499], 2200
    ) == 1899


def test_returns_zero_when_no_laptop_is_within_budget():
    assert get_laptop_cost(
        [2099, 1599, 1899, 1499], 1000
    ) == 0


def test_returns_most_expensive_available_within_budget():
    assert get_laptop_cost(
        [1200, 1500, 1600, 1800, 1400, 2000], 1450
    ) == 1400
#validate_inputs tests
def test_validate_inputs_raises_type_error_for_non_list_laptops():
    with pytest.raises(TypeError):
        get_laptop_cost("not a list", 1000)

def test_validate_inputs_raises_type_error_for_non_integer_budget():
    with pytest.raises(TypeError):
        get_laptop_cost([1500, 2000, 1800, 1400], "not an integer")
def test_raises_type_error_when_laptops_is_not_a_list():
    with pytest.raises(TypeError):
        get_laptop_cost("not a list", 1000)


def test_raises_type_error_when_laptops_contains_non_integer():
    with pytest.raises(TypeError):
        get_laptop_cost([1500, "2000", 1800], 1900)


def test_raises_type_error_when_budget_is_not_integer():
    with pytest.raises(TypeError):
        get_laptop_cost([1500, 2000, 1800], "1900")


def test_returns_zero_when_laptops_list_is_empty():
    assert get_laptop_cost([], 1000) == 0


def test_returns_only_laptop_when_it_is_within_budget():
    assert get_laptop_cost([1500], 2000) == 1500


def test_returns_zero_when_only_laptop_is_over_budget():
    assert get_laptop_cost([1500], 1000) == 0


def test_handles_only_duplicate_prices():
    assert get_laptop_cost([1500, 1500, 1500], 2000) == 1500