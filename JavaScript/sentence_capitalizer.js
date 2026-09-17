/*
    Sentence Capitalizer

Given a paragraph, return a new paragraph where the first char of each sentence is capitalized.

    All other characters should be preserved.
    Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).


*/
function capitalize(paragraph) {
  if (typeof paragraph !== "string") {
    throw new TypeError("Input must be a string");
  }

  let needsCapitalization = true;

  return Array.from(paragraph)
    .map(char => {
      if (/[.?!]/.test(char)) {
        needsCapitalization = true;
        return char;
      }

      if (needsCapitalization && /\p{L}/u.test(char)) {
        needsCapitalization = false;
        return char.toUpperCase();
      }

      return char;
    })
    .join("");
}
export default capitalize;