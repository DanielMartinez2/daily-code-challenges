// Convert string to camel case
function toCamelCase(s) {
  let capitalizedWords = s.split("-").join(" ").split("_").join(" ").split(" ").map((word) =>{
    if(word.length == 1) return word.toUpperCase()
    return word.slice(0,1).toUpperCase() + word.slice(1,).toLowerCase()
  }).join("")
  let camelCase = capitalizedWords.slice(0,1).toLowerCase() + capitalizedWords.slice(1,)  
  return camelCase;
}
