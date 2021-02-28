let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*

It logs hi and hello because foo.a gets overridden in the bar function (mutated object),
while qux is not, because it logs the variable value that is not mutated by the bar function.

*/