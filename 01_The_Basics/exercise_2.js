let num = 4936;
let ones = num % 10; //output 6
let res = (num - ones) / 10;
let tens = res % 10; //output 3
res = (res - tens) / 10;
let hundreds = res % 10; //output 9
res = (res - hundreds) / 10;
let thousands = res % 10; //output 4
