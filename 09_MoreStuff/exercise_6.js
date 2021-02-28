let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(array, regex) {
  let newarray = [];
  array.forEach(elem => regex.test(elem) ? newarray.push(elem) : '');
  return newarray;
}