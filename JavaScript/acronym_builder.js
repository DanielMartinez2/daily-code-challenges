/*
    Acronym Builder

Given a string containing one or more words, return an acronym of the words using the following constraints:

    The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
    The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
    The acronym letters should be returned in the order they are given.
    The acronym should not contain any spaces.
*/
function buildAcronym(str) {
  //validate if is string
  if (typeof str !== 'string'){
    throw new TypeError("Input must be a string!");
  }
  if (str.trim() === ''){
    return '';
  }
  //initialize result as a empty string
  let result = '';
  //make a set of ignored words
  const ignored = new Set(['a','for','an','and','by','of'])  ;
  //make an array of words in sentence removing extra spaces and split by space   
  //take the first letter of each word capitalized an add to result if it's not in set of ignored words except it its the first word
  str.trim().split(/\s+/).forEach((word,index) =>{
    if(index === 0 || !ignored.has(word.toLowerCase()) ){
      result += word[0].toUpperCase();
    };
  });  
  return result;
}
export default buildAcronym;