let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

//It logs 1 because the bar function only assigns its own bar variable within the scope.

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);

//Meanwhile, the second snippet logs 2 because bar variable inside the function gets updated since it's the same scope.

