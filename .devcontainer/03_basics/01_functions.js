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
// console.log(`Result is : ${result}`)





//*********************** */

function loginUsermessgae(userName = "yash"){       //it can also be defined in this way...
    return `${userName} just logged in`
}
// console.log(loginUsermessgae());


//*****************************************WHEN NUMBER OF ARGUMENTS ARE NOT KNOWN..... */

    function calculatePrice(...numm1){          //here 3 dots refer that how many values that may come , it will store the values..
        return numm1
    }
    // console.log(calculatePrice(200, 400 , 500, 340 , 2342));


    //******************** */

    //object in functions....................

const user = {
    username : 'gagan',
    city:'chennai',
    age:19
}

function printName(anyobject){          //here we can pass any objectt.....
    console.log(`username is ${anyobject.username} , city is ${anyobject.city} and the age is ${anyobject.age} .`)
}
// printName(user);

printName ({        // we can also simply give the input and print the output....
    username:"yash",
    city:"alaska"
})



//**************************************WE CAN ALSO DO IT WITH ARRAY TOO............. */

const myArray = [200 , 300 , 353 , 500];

function printSecound(getArray){
    return getArray[3]
}
console.log(printSecound(myArray));

console.log(printSecound([400,242,2414,42325]));        //we can also give values manually , as like as the objects...