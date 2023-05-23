function chunking(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index,index + size ));
    index +=size;
  }
  return chunked;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = chunking(array, 2);

console.log(chunkedArray);

module.exports = chunking

