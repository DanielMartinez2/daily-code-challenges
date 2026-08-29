from targeted_sum import find_target
import pytest

#Normal case
def test_normal_case():
    result = find_target([0,1,2,3,4],6)
    assert result == [2,4]

def test_accepts_float_values():
    assert find_target([1.5, 2.5, 5], 4) == [0, 1]
#Edge cases
def test_negative_values():
    result = find_target([-5,-4,-3,-2,-1], -4)
    assert result == [2,4]

def test_does_not_use_duplicate_values():
    assert find_target([3, 3], 6) == "Target not found"

def test_returns_indices_in_ascending_order():
    assert find_target([4, 2], 6) == [0, 1]

def test_ignores_duplicate_pair_and_finds_different_values():
    assert find_target([3, 3, 4, 2], 6) == [2, 3]
#Invalid Input
def test_entry_non_arr():
    with pytest.raises(TypeError):
        find_target('[1,2,3,4,5]',6)

def test_entry_target_non_integer():
    with pytest.raises(TypeError):
        find_target([0,1,2,3,4],'3')

def test_rejects_non_numeric_array_values():
    with pytest.raises(TypeError):
        find_target([1, "2", 3], 4)

def test_returns_first_pair_when_multiple_pairs_exist():
    assert find_target([1, 4, 2, 3], 5) == [0, 1]

def test_rejects_boolean_target_value():
    with pytest.raises(TypeError):
        find_target([0,1,2,3,4],True)

def test_rejects_boolean_array_value():
    with pytest.raises(TypeError):
        find_target([1, True, 3], 4)
#similar cases

@pytest.mark.parametrize(
    "arr, target, result",
    [
        ([2,7,11,15],9,[0,1]),
        ([3,2,4,5],6,[1,2]),
        ([1,3,5,6,7,8],15,[4,5]),
        ([1,3,5,7],14,'Target not found')
    ]
)
def teste_similar_cases(arr,target,result):
    assert find_target(arr,target) == result