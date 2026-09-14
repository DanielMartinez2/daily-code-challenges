import pytest

from word_frequency import get_words


# --------------------------------
# Casos oficiais
# --------------------------------

@pytest.mark.parametrize(
    "paragraph, expected",
    [
        (
            "Coding in Python is fun because coding Python "
            "allows for coding in Python easily while coding",
            ["coding", "python", "in"],
        ),
        (
            "I like coding. I like testing. I love debugging!",
            ["i", "like", "coding"],
        ),
        (
            "Debug, test, deploy. Debug, debug, test, deploy. "
            "Debug, test, test, deploy!",
            ["debug", "test", "deploy"],
        ),
    ],
)
def test_official_cases(paragraph, expected):
    assert get_words(paragraph) == expected


# --------------------------------
# Casos de borda
# --------------------------------

def test_single_word():
    assert get_words("hello") == ["hello"]


def test_two_different_words():
    assert get_words("hello world") == ["hello", "world"]


def test_exactly_three_different_words():
    assert get_words("one two three") == [
        "one",
        "two",
        "three",
    ]


def test_empty_string():
    assert get_words("") == []


def test_only_spaces():
    assert get_words("     ") == []


def test_only_punctuation():
    assert get_words(".,! ... !!! ,,,") == []


def test_multiple_spaces_between_words():
    assert get_words(
        "python     code   python      test"
    ) == ["python", "code", "test"]


def test_leading_and_trailing_spaces():
    assert get_words(
        "   python code python test   "
    ) == ["python", "code", "test"]


def test_same_word_repeated():
    assert get_words(
        "python python python python"
    ) == ["python"]


# --------------------------------
# Case insensitive
# --------------------------------

def test_ignores_case():
    assert get_words(
        "Python python PYTHON code CODE test"
    ) == ["python", "code", "test"]


def test_returns_words_in_lowercase():
    result = get_words(
        "HELLO hello WORLD world Python"
    )

    assert result == ["hello", "world", "python"]


# --------------------------------
# Pontuação
# --------------------------------

def test_ignores_periods():
    assert get_words(
        "python. python. code. test."
    ) == ["python", "code", "test"]


def test_ignores_commas():
    assert get_words(
        "python, python, code, test,"
    ) == ["python", "code", "test"]


def test_ignores_exclamation_marks():
    assert get_words(
        "python! python! code! test!"
    ) == ["python", "code", "test"]


def test_ignores_mixed_supported_punctuation():
    assert get_words(
        "Python, code! python. test, CODE!"
    ) == ["python", "code", "test"]


# --------------------------------
# Frequência e ordenação
# --------------------------------

def test_returns_only_three_most_frequent_words():
    assert get_words(
        "a a a a b b b c c d e"
    ) == ["a", "b", "c"]


def test_orders_by_descending_frequency():
    assert get_words(
        "one two two three three three"
    ) == ["three", "two", "one"]


def test_tied_words_keep_first_appearance_order():
    assert get_words(
        "alpha beta gamma delta"
    ) == ["alpha", "beta", "gamma"]


def test_tie_after_most_frequent_word():
    assert get_words(
        "python python code test debug"
    ) == ["python", "code", "test"]


# --------------------------------
# Inputs inválidos
# --------------------------------

@pytest.mark.parametrize(
    "invalid_input",
    [
        None,
        123,
        3.14,
        True,
        False,
        [],
        {},
        (),
        {"paragraph": "hello world"},
    ],
)
def test_input_must_be_string(invalid_input):
    with pytest.raises(TypeError):
        get_words(invalid_input)