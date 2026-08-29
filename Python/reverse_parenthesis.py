"""Reverse Parenthesis

Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

    All characters inside each pair of parentheses should be reversed.
    Parentheses should be removed from the final result.
    If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
    Assume all parentheses are evenly balanced and correctly nested.

"""
def decode(s):
    if not isinstance(s, str):
        raise TypeError("Must be a string")

    # Validate parentheses
    balance = 0

    for char in s:
        if char == "(":
            balance += 1

        elif char == ")":
            balance -= 1

            if balance < 0:
                raise ValueError("Parentheses must be correctly balanced")

    if balance != 0:
        raise ValueError("Parentheses must be correctly balanced")

    # No parentheses
    if "(" not in s:
        return s

    x = s.rfind("(")
    y = s.find(")", x)

    new_s = (s[:x] + s[x + 1:y][::-1] + s[y + 1:])

    while "(" in new_s:
        x = new_s.rfind("(")
        y = new_s.find(")", x)

        new_s = (new_s[:x] + new_s[x + 1:y][::-1] + new_s[y + 1:])

    return new_s


"""Versão recursiva
def decode(s):
    # Caso-base: não existem mais parênteses
    if "(" not in s:
        return s

    # Primeiro fechamento encontrado
    closing = s.find(")")

    # Última abertura antes desse fechamento
    opening = s.rfind("(", 0, closing)

    # Inverte o conteúdo do par mais interno
    new_s = (
        s[:opening]
        + s[opening + 1:closing][::-1]
        + s[closing + 1:]
    )

    return decode(new_s)
"""