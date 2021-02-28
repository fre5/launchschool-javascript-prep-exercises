function recursion(n) {
  if(n <= 2) { 
    return n;
  } else {
    return n * recursion(n-1);
  }
}

console.log(recursion(1));     // => 1
console.log(recursion(2));     // => 2
console.log(recursion(3));     // => 6
console.log(recursion(4));     // => 24
console.log(recursion(5));     // => 120
console.log(recursion(6));     // => 720
console.log(recursion(7));     // => 5040
console.log(recursion(8));     // => 40320