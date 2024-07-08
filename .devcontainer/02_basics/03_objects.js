
const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const jsUser ={
    name:"gagan",
    age:18,
    [mySym]:"telegram",
    city:"chennai",
    [mySym2]:"web developer",
    email:"gaganyadav@google.com",
    isLoggedin:false,
    lastLoggindays: ['monday','saturday']
}

console.log(jsUser.email);      //old syntax...

console.log(jsUser["city"]);
console.log(jsUser[mySym]);         //for printing the object..
console.log(`occupation is :: ${jsUser[mySym2]}`);

//*************************** */

//for changing the values , we can....

jsUser.email= 'yadavgagan@google.com';
console.log(jsUser['email']);

//we can also freeze the values , so that no one can change the values...

// Object.freeze(jsUser);          //it will not show any error , but it will also not update the values..
jsUser.age=20;
console.log(jsUser);

//*****************DEFINING A FUNCTION*************  */


jsUser.greetings= function(){
    console.log("hello js user")
}
console.log(jsUser.greetings());




jsUser.greetings2 = function(){
    console.log(`hello ${this.name}`)       //this is used for referance of the same object...
}
console.log(jsUser.greetings2());
