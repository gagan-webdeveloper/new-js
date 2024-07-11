const userEmail = [];       //here it will show email verified , but if we write here empty string , then it will show email not verified...
 if(userEmail){
    console.log("email verified!!")
 }else{
    console.log("not verified!!")
 }


 //*********falsy values.... */
//  flase , 0 , -0 , '' , null , undefined , NaN , BigInt , 0n


 //**********truthy values.... */
//  true , '0' , 'false' , [] , {} , function(){}


 //*********for checking array is empty or not.... */

 if(userEmail.length===0){
    console.log("array is empty!!")
 }


 //for converting object to array....

//  Object.keys(objectname)      ..here it is converted in array

const emptyobject=[];
if(Object.keys(emptyobject).length===0){
    console.log("object is empty!!!")
}



//************************NULLISH COALESCING OPERATOR (??) :     null and undefined... */

let val1;
// val1 = 5??10;
// console.log(val1);

// val1 = null??10;        //here its output will be 10 , because it assigns the correct value  , it assigns one value from the given values...
// console.log(val1);

// val1 = undefined??15;
// console.log(val1);

val1 = null??10??20??40;        //in this case whatever value is at first number after null, or undefined will be printed..
console.log(val1);


//***************TERENARY OPERATORS****************** */

// condition ? true:false

const iceTeaprice = 200;

iceTeaprice<150 ? console.log("less than 150"):console.log("more than 150");



