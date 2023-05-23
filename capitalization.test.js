const capitalize = require('./capitalization')
describe ('Does it change the first letter of a word to a capital?',()=>{
it ('Capitalizes the first letter', ()=> {
    const x = capitalize('hi you')
    const compare = 'Hi You'
    expect(x).toBe(compare)
})

it ('does not take a number',()=>{
   // const x = capitalize(10)
    expect(capitalize(10)).toBe('it doesnt pass as a string')
})

it ('is the function a function',()=>{
    expect(typeof capitalize ).toBe('function')
})



}) 