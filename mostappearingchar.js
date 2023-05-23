function findingrepeated(str) {
     const obj = {};
    str.toString().split('').forEach(char => obj[char] = obj[char] + 1 || 1);
     const maxCount = Math.max(...Object.values(obj));
     const mostFrequentChars = Object.keys(obj).filter(key => obj[key] === maxCount).join(',')
     return mostFrequentChars;
     }
    const inputString = 'jonathan';
     const result =findingrepeated(inputString);
     console.log(result);

     module.exports = findingrepeated