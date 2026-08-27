/*S  P  A  C  E  J  A  M

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

    Non-alphabetical characters should remain unchanged (except for spaces) */

function spaceJam(s) {
  if(typeof s !== "string") throw new TypeError("Input must be a string");
  return s.replace(/ /g, "").toUpperCase().split("").join("  ")  ;
}

export default spaceJam;