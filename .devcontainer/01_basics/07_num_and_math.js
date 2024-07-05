let score = 400;
console.log(score);


let balance = new Number(100);      //here we can particularly fix the datatype to the number..
console.log(balance);

console.log(balance.toString());        //here we can convert the data type to the string!!
console.log(balance.toFixed(2));    //here we can decide how many zeroes to come after decimal....


let newNumber = 133.8324;
// console.log(newNumber.toPrecision(4));      //it rounds off the value according to the given digits ... priority starts from the left of the decimal...



let hundreds = 10000000;
// console.log(hundreds.toLocaleString());     //here commas will appear after 3 digits....





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));      //it converts negative value to the positive
console.log(Math.round(4.6));       //it rounds off the value according to the maths...
console.log(Math.ceil(4.3));    //it roundsoff to the next greatest integer...
console.log(Math.floor(6.6));       //it rounds off to the lower integer.



console.log(Math.random());
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);