/**
Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

    The string can contain any characters.
    The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
    If there's an odd number of characters in the string, ignore the center character.

Tests:

    1. isBalanced("racecar") should return true.
    2. isBalanced("Lorem Ipsum") should return true.
    3. isBalanced("Kitty Ipsum") should return false.
    4. isBalanced("string") should return false.
    5. isBalanced(" ") should return true.
    6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
    7. isBalanced("123A#b!E&*456-o.U") should return true. 

 */
function isBalanced(s) {
  const vowels = ["a", "e", "i", "o", "u"];

  const center = Math.floor(s.length / 2);
  const secondStart = center + (s.length % 2);

  let firstHalfCounter = 0;
  let secondHalfCounter = 0;

  for (let i = 0; i < center; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      firstHalfCounter++;
    }

    if (vowels.includes(s[secondStart + i].toLowerCase())) {
      secondHalfCounter++;
    }
  }

  return firstHalfCounter === secondHalfCounter;
}
export default isBalanced;