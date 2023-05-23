const reverseString = (str)=>{

   let stringArray = str.split('')
    
    let reversedString = ''
    
  while (stringArray.length) {
    
    reversedString += stringArray.pop()
    
     }
    
    return reversedString
    
    }

    const x = "";
const reverse = reverseString(x);
console.log(reverse);

module.exports = reverseString