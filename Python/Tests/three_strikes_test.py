from three_strikes import squares_with_three
import pytest

#Normal case
def test_normal_case():     
    assert squares_with_three(10) == 1

@pytest.mark.parametrize(
    "number, result",
    [
        (1,0),
        (11,1),
        (100,19),
        (1000,326),
        (10000,4531)
    ]
)
def test_valid_cases(number,result):
    assert squares_with_three(number) == result

def test_case_n_less_than_one():
    with pytest.raises(ValueError):
        squares_with_three(0)

def test_negative_number():
    with pytest.raises(ValueError):
        squares_with_three(-5)

def test_gt_then_thousand():
    with pytest.raises(ValueError):
        squares_with_three(10001)

def test_boolean_entry():
    with pytest.raises(TypeError):
        squares_with_three(True)

def test_non_integer():
    with pytest.raises(TypeError):
        squares_with_three("3")

def test_float_number():
    with pytest.raises(TypeError):
        squares_with_three(3.5)

def test_includes_upper_bound():
    assert squares_with_three(18) == 2