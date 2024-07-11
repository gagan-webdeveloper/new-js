// const score = 200;
// if(score>180){  
//     let power = 'fly';          //here if we write let then error would come...but if we write here var , then its scope is completely global... then no error would come...
//     console.log(power);
// }
// console.log(power);


//***************other syntax--- */

// const balance = 1000;
// if(balance>500) console.log("suffecient money!!") , console.log("hello world!!");


//******************** */
const debitCard = true;
const userLoggedin = true;
if(debitCard && debitCard){
    console.log("you are welcome!!")
}else{
    console.log("please try again!!")
}


const loggedInfromgoogle = true;
const loggedInfromemail  = false;

if(loggedInfromemail || loggedInfromgoogle){
    console.log("user is allowed to login!!!")
}else{
    console.log("please choose any account to login!!")
}
