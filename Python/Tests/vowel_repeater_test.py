from vowel_repeater import repeat_vowels
import pytest


# --------------------------------
# Comportamento normal
# --------------------------------

def test_normal_behavior():
    assert repeat_vowels("hello") == "helloo"


def test_preserves_consonant_case():
    assert repeat_vowels("AbCdeF") == "AbCdeeF"


# --------------------------------
# Casos oficiais do exercício
# --------------------------------

@pytest.mark.parametrize(
    "input_value, expected",
    [
        (
            "hello world",
            "helloo wooorld"
        ),
        (
            "freeCodeCamp",
            "freeeCooodeeeeCaaaaamp"
        ),
        (
            "AEIOU",
            "AEeIiiOoooUuuuu"
        ),
        (
            "I like eating ice cream in Iceland",
            "I liikeee eeeeaaaaatiiiiiing "
            "iiiiiiiceeeeeeee "
            "creeeeeeeeeaaaaaaaaaam "
            "iiiiiiiiiiin "
            "Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"
        ),
    ]
)
def test_official_cases(input_value, expected):
    assert repeat_vowels(input_value) == expected


# --------------------------------
# Casos de borda
# --------------------------------

def test_empty_string():
    assert repeat_vowels("") == ""


def test_single_consonant():
    assert repeat_vowels("x") == "x"


def test_single_vowel():
    assert repeat_vowels("a") == "a"


def test_string_without_vowels():
    assert repeat_vowels("bcdfgh") == "bcdfgh"


def test_consecutive_vowels():
    assert repeat_vowels("aei") == "aeeiii"


def test_uppercase_vowels_keep_original_case():
    assert repeat_vowels("AEI") == "AEeIii"


def test_repeated_vowels_are_lowercase():
    assert repeat_vowels("AEO") == "AEeOoo"


def test_spaces_are_preserved():
    assert repeat_vowels("a e") == "a ee"


def test_non_alphabetical_characters_are_preserved():
    assert repeat_vowels("a1e!") == "a1ee!"


def test_mixed_uppercase_and_lowercase():
    assert repeat_vowels("AeIo") == "AeeIiiOooo".replace("O", "o")