'''Vowel Repeater

Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    The original vowel should keeps its case.
    Repeated vowels should be lowercase.
    All non-vowel characters should keep their original case.

'''

def repeat_vowels(s):
    if not isinstance(s, str):
        raise TypeError("Input must be a string")
    counter = 0
    vowels = ['a','e','i','o','u', 'A','E','I','O','U']
    new_s = []
    #repetir vogais
    for letter in s:
        new_s.append(letter)
        if letter in vowels:                                  
            new_s.append(letter.lower()*counter)            
            counter += 1
        
    string = ''.join(new_s)    
    return string