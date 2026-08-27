function calculateOperation(num1, num2, operation){
  if (operation == '+') return num1 + num2
  if (operation == '-') return num1 - num2
  if (operation == '*') return num1 * num2
  if (operation == '/') return num1 / num2
  if (operation == '%') return num1 % num2
  return 'Invalid Operation'
}

function evaluate(numbers, operators) {
  let result = 0  
  let i = 0
  let size = numbers.length    
  while(numbers.length){
    let firstNumber = numbers.shift()    
    if (numbers.length == size-1){      
      let secondNumber = numbers.shift()
      result = calculateOperation(firstNumber,secondNumber, operators[i])
      console.log("Resultado primeira iteração: ", result)
    }else{
      result = calculateOperation(result,firstNumber,operators[i])
    }       
    console.log(numbers)    
    console.log('Iteração: ', result,operators[i] ,firstNumber)
    i += 1
    if(i >= operators.length) i = 0    
  }
  console.log(result)
  return result;
}
export default evaluate;