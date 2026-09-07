/*
IPv4 Validator

Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

    It is between 0 and 255 inclusive.
    It does not have leading zeros (e.g. 0 is allowed, 01 is not).
    Only numeric characters are allowed.


*/
function isValidIPv4(ipv4) {
  //validar se input é string
  if (typeof ipv4 !== 'string'){
    throw new TypeError("Input must be a string");
  }
  //verificar padrão regex, se não corresponder return false
  const regex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  if (!regex.test(ipv4)){
    return false;
  }
  //seccionar as strings de números  
  
  return ipv4.split('.').every((num)=>{
    //verificar se cada número é valido
    const number = Number(num);
    return (number <=255 && !(num.length >1 && num[0] === '0'))
  })
}
export default isValidIPv4;