//age.js
let rlSync = require('readline-sync');
const age = Number(rlSync.question("How old are you? "));
console.log(`You are ${age} years old.`)
for(let i = 10; i < 50; i+= 10) {
  console.log(`In ${i} years, you will be ${i + age} years old.`);
}