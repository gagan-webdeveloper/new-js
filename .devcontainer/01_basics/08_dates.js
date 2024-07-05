//DATES

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());       //it will give ---7/5/2024
console.log(myDate.toDateString());     // friday jul 05 2024....

console.log(typeof myDate);             //date is an object...


// let createDate = new Date(2023 , 0 , 23 , 5 , 3 );       //months in javascript starts with 0;
// console.log(createDate.toDateString());


let createDate = new Date("2023-01-14");
console.log(createDate.toDateString());


let mytimestamp = Date.now();
// console.log(mytimestamp);

// console.log(createDate.getTime());


// console.log(Date.now());        //it will come in millisecounds.
// console.log(Math.floor(Date.now()/1000))    //it will come in secounds...



let newDate = new Date()

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);      //always add 1 in case of date..



