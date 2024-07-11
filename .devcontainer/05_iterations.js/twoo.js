//while loop********************************************

// let i = 0;
// while(i<=10){
//     console.log(`value of i is :: ${i}`)
//     i++;
// }

//Array*******************

let myArray = ['gagan' , 'yash' , 'abc'];
let i=0;
while(i<myArray.length){
    // console.log(myArray[i])
    i++;
}



//*************DO while loop************************ */         // in do while loop , phele kaam hota hh and baad me condition check hoti hh...
let score = 1;
do{     
    // console.log(`score is :: ${score}`)
    score++;
}while(score<=10)


//*************************ARRAY****************** */

const arr = [1,2,3,4,5,6];

for(const num of arr){      //in this we do not have to give conditions for array....here num is variable , and arr is function...
    // console.log(num);
}



const greetings = "hello world!!";
for (const greet of greetings) {
    // console.log(`Each chracter is ${greet}`)
}



//**************************************MAPS***************************************** */

const map = new Map();
map.set('in' , "india");
map.set('usa' , "united states of india")
map.set('fr' , "france");
// console.log(map)


for (const [key,value] of map) {        //we can not do the same thing with objects.....
    console.log(key ,":-" , value);
} 


const myObj = {
    'game1':"Nfs",
    'game2':"call of duty"          //it is mandetory to use '' outer the keys....without it , it will not work...
}
for (const [key , value] of myObj) {
    console.log(keys, '-:' , value);
}

