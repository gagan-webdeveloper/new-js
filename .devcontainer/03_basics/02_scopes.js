var c = 13;
if(true){
    let a = 10;
    const b = 23;           // in var , the value printed in the block scope (in if statement..) will be printed , rather than the values present in the global scope....
    var c = 24;
}
// console.log(c);
// console.log(b);
// console.log(a);


//********************************************FOR LET STATEMENTS................     */

let a = 34;

if(true){
    let a = 24;
    const b = 23;
    // console.log(`inner a is : ${a}`)        // if we print the value inside the if , it will give the value presrnted in the if statements...
}
// console.log(a);

//****************global scope in code environment is totally  different from the console window.. */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=====================++++++++++++++===========



//******************NESTED SCOPE&&&&&&&&&&&&&&&&&&&& */

// smaller function can access the values of the greater one ,but larger function can not access the values of the smaller one....

function one(){
   const name = 'gagan';
   function two(){
    const city = 'chennai';
    console.log(name);}
    // two();              //it would print the name ...
   
// console.log(city);
}
one();


//******************************* */
if(true){
    const username = 'gagan';
    if(username==='gagan'){
        const website = ' youtube';
        // console.log(username + website);
    }
    // console.log(website);            //IT WILL show error because scope was upto 47-52 only , accesing outside is not possible...
}

// console.log(username); 



//******************************++++++++++++++++++++++++++ */

// function addone(num){
//     return num+1;
// }
// addone(5)

// const addtwo = function(num){
//     return num+2;
// }
// addtwo(4);



addone(5)       //it would not show any error...
function addone(num){
    return num+1;
}

// addtwo(4);       //it will show error because of not defined of two function.... will study later on...
const addtwo = function(num){
    return num+2;
}



