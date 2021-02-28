const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//It will not produce an error because the othe FOO variable only exists within the block scope.