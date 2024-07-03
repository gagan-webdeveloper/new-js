let score = "33";
// console.log(typeof score);
// console.log(typeof(score));

let valueinNumber = Number(score); // it converts string into the number ....
// console.log(valueinNumber);


/*
"33" => number;
"33abc" => nan;
true => 1 ;
false => 0;

*/

//**********************we can also do with other data types too , such as boolean ....*************************

let isLoggedin = 1;
let booleanisLoggedin = Boolean(isLoggedin);        //output will be true...
// console.log(booleanisLoggedin);

/*
   "" => false;
   "gagan" => true;
*/



//*******************FOR STRINGS************************ */

let someNumber = 33;
let stringNumber = String(someNumber);

// console.log(typeof stringNumber);





//*********************************************OPERATIONS****************************************** */

let value = 3;
let negvalue = -value;
// console.log(negvalue);


let str1 = "hello";
let str2 = " gagan";
let str3 = str1+str2;
// console.log(str3);



console.log("1" +2);        //12
console.log(1+"2");         //12
console.log("1"+2+2);       //122
console.log(1+2+"2");       //32
console.log(+true);         //1


let num1, num2 , num3;

num1 = num2 = num3 = 2+2;
console.log(num1+num2+num3); // =>  4;



let gameCounter = 100;
let newgameCounter = ++gameCounter;
console.log(newgameCounter);
