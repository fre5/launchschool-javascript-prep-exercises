function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//The function splits a string by the empty space ' ', stores them in an array, then reverse the order of the elements on the array, and returns a new array of each string's length.