/**
 * Pangram

Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

    Ignore non-alphabetical characters in the word or sentence.
    Ignore letter casing in the word or sentence.


 */
function isPangram(sentence, letters) {
  if (typeof sentence !== "string" || typeof letters !== "string") {
    throw new TypeError("Both inputs must be strings");
  }
  const requiredLetters = new Set(letters.toLowerCase());

  const usedLetters = new Set(
    sentence
      .toLowerCase()
      .replace(/[^a-z]/g, "")
  );

  if (requiredLetters.size !== usedLetters.size) {
    return false;
  }

  for (const letter of requiredLetters) {
    if (!usedLetters.has(letter)) {
      return false;
    }
  }

  return true;
}
export default isPangram;