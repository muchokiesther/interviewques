function capitalize(str) { 
    if(typeof str !== 'string') {
        return "it doesnt pass as a string"
    }
    let words = str.split(' ');  
    let CapitalizedFirstWords = [];  
    words.forEach(CharAt => {  
        CapitalizedFirstWords.push(CharAt[0].toUpperCase() + CharAt.slice(1, CharAt.length));  
    });  
    return CapitalizedFirstWords.join(' ');  
} 

const x = "hello world";
const capitalizedWords = capitalize(x);
console.log(capitalizedWords);
module.exports = capitalize