'''Anagram Checker

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

    Ignore casing and white space'''
import re
def are_anagrams(str1, str2):
    if not isinstance(str1,str) or not isinstance(str2,str):
        raise TypeError("Both inputs must be strings!")
    #should ignore casing and whitespace, so we will convert both strings to lowercase and remove whitespace before comparing
    #replace all whitespace characters with empty string
    str1 = re.sub(r'\s+', '', str1)
    str2 = re.sub(r'\s+', '', str2)    
    arr1 = list(str1.strip().lower())
    arr2 = list(str2.strip().lower())    
    
    return sorted(arr1) == sorted(arr2)