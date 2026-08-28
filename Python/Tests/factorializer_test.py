from factorializer import factorial
import pytest

#testar comportamento normal
def test_normal_behavior():
    assert factorial(5) == 120
#caso limite
@pytest.mark.parametrize(
    "input_value, expected",
    [
        (0, 1),
        (20, 2432902008176640000),
        (1, 1),
    ]
)
def test_edge_case(input_value, expected):
    assert factorial(input_value) == expected

#entrada inválida
@pytest.mark.parametrize(
    "input_value, expected_exception",
    [
        ("5", TypeError),
        (5.0, TypeError),
        (-5, ValueError),
        (21, ValueError),
    ]
)
def test_invalid_input(input_value, expected_exception):
    with pytest.raises(expected_exception):
        factorial(input_value)

#vários casos semelhantes
@pytest.mark.parametrize(
    "input_value, expected",
    [
        (0, 1),
        (1, 1),
        (2, 2),
        (3, 6),
        (4, 24),
        (5, 120),
    ]
)
def test_multiple_cases(input_value, expected):
    assert factorial(input_value) == expected

def test_rejects_boolean():
    with pytest.raises(TypeError):
        factorial(True)