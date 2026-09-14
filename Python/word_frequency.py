'''Word Frequency

Given a paragraph, return an array of the three most frequently occurring words.

    Words in the paragraph will be separated by spaces.
    Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
    Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
    The returned array should have all lowercase words.
    The returned array should be in descending order with the most frequently occurring word first.

'''
import re

def get_words(paragraph):
    if not isinstance(paragraph, str):
        raise TypeError("Input must be a string.")
    no_punctuation = re.sub(r'[.,!]', '', paragraph)

    words = no_punctuation.lower().split()

    word_count = {}

    for word in words:
        if word not in word_count:
            word_count[word] = 1
        else:
            word_count[word] += 1

    sorted_words = sorted(
        word_count.items(),
        key=lambda item: item[1],
        reverse=True
    )

    return [
        word
        for word, count in sorted_words[:3]
    ]