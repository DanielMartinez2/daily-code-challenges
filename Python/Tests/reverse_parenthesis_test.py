from reverse_parenthesis import decode
import pytest


def test_normal_behavior():
    assert decode("ab(cd)e") == "abdce"


@pytest.mark.parametrize(
    "string, expected",
    [
        ("(abc)", "cba"),
        ("(f(b(dc)e)a)", "abcdef"),
        ("((is?)(a(t d)h)e(n y( uo)r)aC)", "Can you read this?"),
        ("f(Ce(re))o((e(aC)m)d)p", "freeCodeCamp"),
        ("a()b", "ab"),
    ],
)
def test_valid_cases(string, expected):
    assert decode(string) == expected


def test_returns_same_string_without_parentheses():
    assert decode("abcdef") == "abcdef"


def test_empty_string():
    assert decode("") == ""


@pytest.mark.parametrize(
    "invalid_input",
    [
        5555,
        3.14,
        None,
        ["abc"],
    ],
)
def test_raises_type_error_for_non_string_input(invalid_input):
    with pytest.raises(TypeError):
        decode(invalid_input)

@pytest.mark.parametrize(
    "invalid_string",
    [
        "abc((sds)e",   # falta fechamento
        "abc)sds(e",    # ordem incorreta
        "(abc))",       # fechamento extra
        "((abc)",       # abertura extra
        ")abc(",        # mesma quantidade, ordem errada
    ]
)
def test_raises_value_error_for_unbalanced_parentheses(
    invalid_string
):
    with pytest.raises(ValueError):
        decode(invalid_string)