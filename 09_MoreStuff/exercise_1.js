let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//It logs [1, 4, 3] because both array values resides in the same address in the memory.