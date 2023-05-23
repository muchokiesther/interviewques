const reversalInt = require('./reverse')

describe('Does it reverse the number?',()=> {
    it('Checks if i am truly reversing the number',()=>{
        const y = reversalInt(51)
        const reversed = 15
        expect(y).toBe(reversed)
    })

    it('Checks if its truly a function',() =>{
        expect(typeof reversalInt).toBe('function')
    })

    it('Checks if it can reverse negative figures',()=>{
        const z =reversalInt(-25)
        const negreversed = -52
        expect(z).toBe(negreversed)
    })
    
})