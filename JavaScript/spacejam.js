/*S  P  A  C  E  J  A  M

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

    Non-alphabetical characters should remain unchanged (except for spaces) */

function spaceJam(s) {  
  return s.replaceAll(/ /g, "").toUpperCase().split("").join("  ")  ;
}

