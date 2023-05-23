const chunking = require('./chunkingArray')
describe('Does it give an array and chunk size divide the array into many subarray?',()=>{
test ('is the function a function',()=>{
    expect(typeof chunking).toBe('function')
})

it('Does it split the array into chunks to the specified size?', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunkedArray = chunking(array, 2);
    const expectedChunkedArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
    expect(chunkedArray).toEqual(expectedChunkedArray);
  });
  
  it('Does not return a chunked array when the chunk size is larger than the array length', () => {
    const array = [1, 2, 3, 4, 5];
    const chunkedArray = chunking(array, 10);
    expect(chunkedArray).toEqual([array]);
  });
  
})