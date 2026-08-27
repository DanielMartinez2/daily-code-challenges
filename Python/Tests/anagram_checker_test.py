from anagram_checker import are_anagrams
import pytest

#validate that the function raises a TypeError when non-string inputs are provided
def test_non_string_inputs():
    with pytest.raises(TypeError):
        are_anagrams(123, "silent")
    with pytest.raises(TypeError):
        are_anagrams("listen", 456)
    with pytest.raises(TypeError):
        are_anagrams(123, 456)

#Test cases for the are_anagrams function
def test_are_anagrams():
    assert are_anagrams("listen", "silent") == True
    assert are_anagrams("School master", "The classroom") == True
    assert are_anagrams("Hello", "World") == False     
    assert are_anagrams("The eyes", "They see") == True
    assert are_anagrams("A gentleman", "Elegant man") == True

def test_are_anagrams_with_whitespace_and_casing():
    assert are_anagrams("Listen", "Silent") == True
    assert are_anagrams("  School master  ", "The classroom") == True
    assert are_anagrams("Hello", "World") == False     
    assert are_anagrams("The eyes", "They see") == True
    assert are_anagrams("A gentleman", "Elegant man") == True    

#test cases where one word has whitespace between and the other does not
def test_are_anagrams_with_whitespace():
    assert are_anagrams("  Hello  ", "  World  ") == False
    assert are_anagrams("Astronomer", "Moon starer") == True
    assert are_anagrams("Dormitory", "Dirty room") == True

#test cases with numbers and special characters
def test_are_anagrams_with_numbers_and_special_characters():
    assert are_anagrams("123", "321") == True
    assert are_anagrams("!@#", "#@!") == True
    assert are_anagrams("Hello!", "!olleH") == True
    assert are_anagrams("Hello123", "321olleH") == True
    assert are_anagrams("Hello123", "321olleH!") == False