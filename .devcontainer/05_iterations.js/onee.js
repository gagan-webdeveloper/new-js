for(let i = 0; i<=10;i++){          //for selecting all same things at one time use---ctrl+d;  // i will not be accessed outside the loop;;
    // console.log(i);
}

//********************** */
for(let i =0;i<=10;i++){
    const number = i;
    if(number==5){
        // console.log('5 is the best number!!')
    }
    // console.log(i);
}



//*******************NESTED LOOPS*************************** */

for(let i =0;i<=5;i++){
    // console.log(`outer loop ${i}`)
    for(let j=0;j<=10;j++){
        // console.log(`inner loop is ${j} for the outer ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)                         //for printing the table;;
    }
}


//****************ARRAYS IN FOR LOOPS****************** *

let myArray = ['chennai' , 'delhi' , 'mumbai' , 'alaska'];
console.log(myArray.length);
for(let i =0; i<myArray.length ; i++){
    const arrayy = myArray[i];
    // console.log(arrayy);
}



//***************BREAK AND CONTINUE********************* */

for(let i =1;i<=10;i++){
   if(i==5){
    console.log("5 detucted!!")
    break;          // use of break exits from the loop... 
   }
    console.log(`The value of i is : ${i}`)
}


//************CONTINUE   */
for(let i =0; i<=10;i++){
    if(i==5){
        console.log("5 detucted!!")
        continue;       //continue just skips the one value , and continues the code..
    }
    console.log(`The value of i is ${i}`);
}