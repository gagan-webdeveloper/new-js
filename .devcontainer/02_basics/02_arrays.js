const marvel_heroes = ['spiderman' , 'thor' , 'ironman'];
const dc_heroes = ['superman' , 'batman' ,'flash'];

// marvel_heroes.push(dc_heroes);      //in this case the dc heroes array would come as thr 3rd element in the marvel arr,,...means array ke ander array..

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);


//************************** */

 const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);            //it will show all the values of the arrays...

//for the above , we have an another function too.....

//**************************** */

const all_new_heroes = [...marvel_heroes , ...dc_heroes];
console.log(all_new_heroes);        //it will give same output as if thw concat function...


//****************************** */

const another_array = [1,2,3 ,[4,5,6],7,[6,7,[4,5]]];   //in this situation of array inside arrays..
const real_another_array = another_array.flat(Infinity);        //it will give all the values present in the array ,no matter how deep arrays are located..
console.log(real_another_array);

//***************************** */

console.log(Array.isArray("gagan"));    //it checks wether given input is array or not...
console.log(Array.from("gagan"));           //it converts given input into the array..
console.log(Array.from({name:"gagan"}));    //it would return an empty array... as it can not process the inside values...

//*************************** */

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2, score3));       //it will create array of thr given input.....

