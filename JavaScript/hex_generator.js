/**
 Hex Generator

Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

    The function should handle "red", "green", or "blue" as an input argument.
    If the input is not one of those, the function should return "Invalid color".
    The function should return a random six-character hex color code where the input color value is greater than any of the others.
    Example of valid outputs for a given input:

Input 	Output
"red" 	"FF0000"
"green" 	"00FF00"
"blue" 	"0000FF"
Tests:

    1. generateHex("yellow") should return "Invalid color".
    2. generateHex("red") should return a six-character string.
    3. generateHex("red") should return a valid six-character hex color code.
    4. generateHex("red") should return a valid hex color with a higher red value than other colors.
    5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
    6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
    7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.
 */

function generateHex(color) {
  //Input is string
  if (typeof color != "string"){
    throw new TypeError('Input must be string')    
  }
  //input must be red,green,blue  
  const validColors = ['red','blue','green']
  if (!validColors.includes(color)) return 'Invalid color'
  //generate 1 random number and 2 random numbers lt firstNum
  let firstNum = Math.floor(Math.random()*255 + 1)
  let secondNum = Math.floor(Math.random()*firstNum)
  let thirdNum = Math.floor(Math.random()*firstNum)  
  //convert them to hexadecimal
  const firstNumHex = firstNum.toString(16).padStart(2, "0").toUpperCase()
  const secondNumHex = secondNum.toString(16).padStart(2, "0").toUpperCase()
  const thirdNumHex = thirdNum.toString(16).padStart(2, "0").toUpperCase()  
  //Switch case strings
  switch(color){
    case 'red':
      return firstNumHex + secondNumHex + thirdNumHex
    case 'green':
      return secondNumHex + firstNumHex + thirdNumHex
    case 'blue':
      return secondNumHex + thirdNumHex + firstNumHex
  }  
}

export default generateHex;