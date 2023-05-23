const reverseString = require ('./reversing')
describe('This is a test for reversing without using the reverse keyword',()=>{
it('This tests if this is indeed a function',()=>{
        expect(typeof reverseString ).toBe('function')
})

it('This checks if the output is truly reversed',()=>{
    const x = reverseString('hello world')
    const reversed = 'dlrow olleh'
    expect(x).toBe(reversed)
})
it('Handles an empty string ', () => {
    const inputString = '';
    const reverse = reverseString(inputString);
    const expected = '';
    expect(reverse).toEqual(expected);
  });
  
})