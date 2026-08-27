/*
Unorder of Operations

Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.

 */

function calculateOperation(num1, num2, operation){
  if (operation == '+') return num1 + num2
  if (operation == '-') return num1 - num2
  if (operation == '*') return num1 * num2
  if (operation == '/') return num1 / num2
  if (operation == '%') return num1 % num2
  return 'Invalid Operation'
}

function evaluate(numbers, operators) {
  //throw an error if the numbers parameter is not an array
  if (!Array.isArray(numbers)) {
    throw new TypeError("numbers must be an array");
  }
  //throw an error if the operators parameter is not an array
  if (!Array.isArray(operators)) {
    throw new TypeError("operators must be an array");
  }
  //throw an error if the numbers array contain non-numeric values
  if (numbers.some(num => typeof num !== 'number')) {
    throw new TypeError("numbers array must contain only numeric values");
  }
  //throw an error if the operators array contain any value different from the allowed operations
  const allowedOperations = ['+', '-', '*', '/', '%'];
  if (operators.some(op => !allowedOperations.includes(op))) {
    throw new TypeError("operators array must contain only valid operations");
  } 
  if (numbers.length == 1) return numbers[0];
  let result = 0  
  let i = 0
  let size = numbers.length - 1   
  const numbersCopy = [...numbers]; 
  while(numbersCopy.length){
    let firstNumber = numbersCopy.shift()    
    if (numbersCopy.length == size){      
      let secondNumber = numbersCopy.shift()
      result = calculateOperation(firstNumber,secondNumber, operators[i])      
    }else{
      result = calculateOperation(result,firstNumber,operators[i])
    }    
    i += 1
    if(i >= operators.length) i = 0    
  }  
  return result;
}
export default evaluate;