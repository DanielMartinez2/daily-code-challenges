/*
    Unique Characters

    Given a string, determine if all the characters in the string are unique.

    Uppercase and lowercase letters should be considered different characters.

*/

function allUnique(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const uniqueStrings = new Set();  
  return str.split("").every((letter)=>{
    if(!uniqueStrings.has(letter)){
      uniqueStrings.add(letter);
      return true;
    }else{
      return false;
    }
  })
}
export default allUnique;