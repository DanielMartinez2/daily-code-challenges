/*
Jbelmud Text

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

    The first and last letters of the words remain in place
    All letters between the first and last letter are sorted alphabetically.
    The input strings will contain no punctuation, and will be entirely lowercase.
 */


function jbelmu(text) {
  if (typeof text !== 'string'){
    throw new TypeError("Input must be a string.")
  }
  const words = text.split(" ")
  const jumbledWords = words.map((word)=>{
    if (word.length <= 2) return word
    const firstLetter = word[0]
    const lastLetter = word[word.length-1]
    const sortedWord = word.slice(1,word.length-1).split("").toSorted().join("")
    return firstLetter + sortedWord + lastLetter
  })
  return jumbledWords.join(" ");
}
export default jbelmu;