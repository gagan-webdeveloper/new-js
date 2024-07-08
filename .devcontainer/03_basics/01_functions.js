function sayMyname(){
    console.log("G");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("n");
}
// sayMyname();    //calling the function....

//adding two numbers....

function addtwonumbers(number1 , number2){
        console.log(number1+number2);
}
// addtwonumbers(3,'5');   //it would come 35, as 5 is refered as string ....

// return and console both are two different things...



function addNumbers(num1 , num2 ){
   return num1+num2;
}
let result = addNumbers(21,5);
console.log(`Result is : ${result}`)





//*********************** */

function loginUsermessgae(userName = "yash"){       //it can also be defined in this way...
    return `${userName} just logged in`
}

console.log(loginUsermessgae());