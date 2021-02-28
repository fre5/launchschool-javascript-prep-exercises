let array = [3, 5, 7, 23, 45];

console.log(sumOfSquares(array)); 

function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + (element * element), 0);
}