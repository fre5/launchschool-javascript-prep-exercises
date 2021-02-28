let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;
  if (counter > 2) {
    break;
  }
}

//This never stops iterating because the condition is a truthy where counter = 1 and the loop never reaches > 2 where the break loop sits.
