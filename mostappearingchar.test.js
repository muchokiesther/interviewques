const findingrepeated = require ('./mostappearingchar')
describe('This is finding the most repeated figures',() =>{
    it('This checks if it can find the most repeated figures',()=>{
        const y = findingrepeated('Wamuyu')
        const result = 'u'
        expect(y).toBe(result)
    })
    it('This checks if it can find both of the most repeated figures if they are figures that have been repeated the same amount of times',()=>{
        const z = findingrepeated('Jonathan')
        const results = 'n,a'
        expect(z).toBe(results)
    })
    it('Checks if its truly a function',() =>{
        expect(typeof findingrepeated).toBe('function')
    })

    it('Finds the most frequently repeated figures (numbers)', () => {
        const inputString = '12369415';
        const result = findingrepeated(inputString);
        const expected = '1'; // Expected most frequently repeated figure
        expect(result).toEqual(expected);
      });
      
})