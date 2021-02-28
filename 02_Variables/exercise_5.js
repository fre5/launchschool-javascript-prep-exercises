let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

//It logs 'bar' because foo variable only exists within the block scope.