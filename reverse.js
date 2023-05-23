// //Question one without using reverse keyword , write code to reverse a string?
// function reverseString(string){

//          const newstr = string.split('')
    
    
    
    
//          let reversedString =""
    
//         for(let i=newstr.length-1; i>=0 ;i--){
    
//              reversedString += newstr[i]
    
//         }
    
//         return reversedString
    
//     }
    
//     console.log (reverseString('rookie'))


function reversalInt(number){
    const reverse = number.toString() .split('') .reverse().join('')
    return Math.sign(number)*parseInt(reverse)
}
console.log(reversalInt(-50))

module.exports = reversalInt
