/**
 * 
 camelCase

Given a string, return its camel case version using the following rules:

    Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
    The first word should be all lowercase.
    Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
    All spaces and separators should be removed.


 */

function toCamelCase(s) {
  if (typeof s !== 'string'){
    throw new TypeError("Input must be a string");
  }
  let capitalizedWords = s.split("-").join(" ").split("_").join(" ").split(" ").map((word) =>{
    if(word.length === 1) return word.toUpperCase();
    return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
  }).join("");
  let camelCase = capitalizedWords.slice(0,1).toLowerCase() + capitalizedWords.slice(1,)  
  return camelCase;
};
export default toCamelCase;