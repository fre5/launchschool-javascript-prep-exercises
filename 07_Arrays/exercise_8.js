let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(str) {
 
  return str.reduce((acc,el) => {
    let len = el.length;
    if(len % 2 === 1) {
      acc.push(len);
    }
    return acc;
  }, []);
}