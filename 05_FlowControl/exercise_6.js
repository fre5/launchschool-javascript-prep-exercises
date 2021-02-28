function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

//It logs Not Empty because arr is a truthy even though the passing argument is an empty array.