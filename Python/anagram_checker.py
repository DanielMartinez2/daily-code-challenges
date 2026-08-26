'''Anagram Checker

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

    Ignore casing and white space'''
def are_anagrams(str1, str2):
    if not isinstance(str1,str) or not isinstance(str2,str):
        raise TypeError("Both inputs must be strings!")
    arr1 = list(str1.strip().lower())
    arr2 = list(str2.strip().lower())    
    
    return sorted(arr1) == sorted(arr2)

print(are_anagrams("listen", "silent"))
print(are_anagrams("School master", "The classroom"))
print(are_anagrams("Hello", "World"))