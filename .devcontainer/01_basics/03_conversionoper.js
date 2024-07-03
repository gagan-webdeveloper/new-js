let score = "33";
console.log(typeof score);
console.log(typeof(score));

let valueinNumber = Number(score); // it converts string into the number ....
console.log(valueinNumber);


/*
"33" => number;
"33abc" => nan;
true => 1 ;
false => 0;

*/

//**********************we can also do with other data types too , such as boolean ....*************************

let isLoggedin = 1;
let booleanisLoggedin = Boolean(isLoggedin);        //output will be true...
console.log(booleanisLoggedin);

/*
   "" => false;
   "gagan" => true;
*/



//*******************FOR STRINGS************************ */

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(typeof stringNumber);
