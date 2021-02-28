let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  let newarr = array.map(num => num.length);
  return newarr.filter(num => num % 2 !== 0);
}
