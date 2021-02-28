let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);
let arr2 = arr.map(el => el.toUpperCase());

console.log(arr2);
console.log(obj);