from candlelight import burn_candles
import pytest

# comportamento normal
def test_normal_behavior():
    result = burn_candles(7, 2)
    assert result == 13

# caso limite
def test_edge_case():
    result = burn_candles(0, 2)
    assert result == 0

def test_edge_case_one_candle():
    result = burn_candles(1, 2)
    assert result == 1

def test_edge_case_leftovers_needed_greater_than_candles():
    result = burn_candles(5, 10)
    assert result == 5

def test_edge_case_leftovers_needed_equals_candles():
    result = burn_candles(5, 5)
    assert result == 6

def test_case_where_leftovers_needed_is_1():
    with pytest.raises(ValueError):
        burn_candles(5, 1)

# entrada inválida
def test_invalid_input_non_integer_candles():
    with pytest.raises(TypeError):
        burn_candles("5", 2)
def test_invalid_input_non_integer_leftovers_needed():
    with pytest.raises(TypeError):
        burn_candles(5, "2")

def test_invalid_input_negative_candles():
    with pytest.raises(ValueError):
        burn_candles(-1, 2)

def test_invalid_input_negative_leftovers_needed():
    with pytest.raises(ValueError):
        burn_candles(5, -2)

# vários casos semelhantes
@pytest.mark.parametrize(
    "candles, leftovers_needed, expected",
    [
        (7, 2, 13),
        (10, 5, 12),
        (20, 3, 29),
        (17, 4, 22),
        (2345, 3, 3517),
    ]
)
def test_parametrized_cases(candles, leftovers_needed, expected):
    result = burn_candles(candles, leftovers_needed)
    assert result == expected

@pytest.mark.parametrize(
    "leftovers_needed",
    [-2, 0, 1]
)
def test_invalid_leftovers_needed(leftovers_needed):
    with pytest.raises(ValueError):
        burn_candles(5, leftovers_needed)

@pytest.mark.parametrize(
    "candles, leftovers_needed",
    [
        (True, 2),
        (5, True),
    ]
)
def test_rejects_boolean_inputs(candles, leftovers_needed):
    with pytest.raises(TypeError):
        burn_candles(candles, leftovers_needed)