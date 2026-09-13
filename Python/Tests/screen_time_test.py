import pytest

from screen_time import too_much_screen_time


# --------------------------------
# Casos oficiais do exercício
# --------------------------------

@pytest.mark.parametrize(
    "hours, expected",
    [
        (
            [1, 2, 3, 4, 5, 6, 7],
            False,
        ),
        (
            [7, 8, 8, 4, 2, 2, 3],
            False,
        ),
        (
            [5, 6, 6, 6, 6, 6, 6],
            False,
        ),
        (
            [1, 2, 3, 11, 1, 3, 4],
            True,
        ),
        (
            [1, 2, 3, 10, 2, 1, 0],
            True,
        ),
        (
            [3, 3, 5, 8, 8, 9, 4],
            True,
        ),
        (
            [3, 9, 4, 8, 5, 7, 6],
            True,
        ),
    ],
)
def test_official_cases(hours, expected):
    assert too_much_screen_time(hours) is expected


# --------------------------------
# Casos de borda
# --------------------------------

def test_single_day_exactly_ten_hours():
    assert too_much_screen_time(
        [1, 1, 1, 10, 1, 1, 1]
    ) is True


def test_single_day_just_below_ten_hours():
    assert too_much_screen_time(
        [1, 1, 1, 9, 1, 1, 1]
    ) is False


def test_three_day_average_exactly_eight():
    assert too_much_screen_time(
        [8, 8, 8, 1, 1, 1, 1]
    ) is True


def test_three_day_average_below_eight():
    assert too_much_screen_time(
        [7, 8, 8, 1, 1, 1, 1]
    ) is False


def test_last_three_days_average_exactly_eight():
    assert too_much_screen_time(
        [1, 1, 1, 1, 8, 8, 8]
    ) is True


def test_middle_three_days_average_exactly_eight():
    assert too_much_screen_time(
        [1, 1, 8, 8, 8, 1, 1]
    ) is True


def test_weekly_average_exactly_six():
    assert too_much_screen_time(
        [6, 6, 6, 6, 6, 6, 6]
    ) is True


def test_weekly_average_below_six():
    assert too_much_screen_time(
        [5, 6, 6, 6, 6, 6, 6]
    ) is False


def test_all_days_zero():
    assert too_much_screen_time(
        [0, 0, 0, 0, 0, 0, 0]
    ) is False


# --------------------------------
# Input inválido: argumento
# --------------------------------

@pytest.mark.parametrize(
    "invalid_input",
    [
        None,
        123,
        3.14,
        "1,2,3,4,5,6,7",
        True,
        (1, 2, 3, 4, 5, 6, 7),
        {1, 2, 3, 4, 5, 6, 7},
        {"hours": [1, 2, 3]},
    ],
)
def test_input_must_be_a_list(invalid_input):
    with pytest.raises(TypeError):
        too_much_screen_time(invalid_input)


# --------------------------------
# Input inválido: quantidade de dias
# --------------------------------

@pytest.mark.parametrize(
    "invalid_hours",
    [
        [],
        [1],
        [1, 2, 3],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6, 7, 8],
    ],
)
def test_input_must_contain_exactly_seven_days(invalid_hours):
    with pytest.raises(ValueError):
        too_much_screen_time(invalid_hours)


# --------------------------------
# Input inválido: tipos dos elementos
# --------------------------------

@pytest.mark.parametrize(
    "invalid_hours",
    [
        [1, 2, 3, 4, 5, 6, "7"],
        [1, 2, 3, 4, 5, 6, 7.5],
        [1, 2, 3, 4, 5, 6, None],
        [1, 2, 3, 4, 5, 6, True],
        [False, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, []],
    ],
)
def test_all_values_must_be_integers(invalid_hours):
    with pytest.raises(TypeError):
        too_much_screen_time(invalid_hours)