function allCaps(word) {
  if(word.length > 10) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

console.log(allCaps('hello world'));
console.log(allCaps('goodbye'));