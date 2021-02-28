function evenOrOdd(x) {
  if(!Number.isInteger(x)) {
    console.log("not an integer");
    return;
  } 

  if(x % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }

}