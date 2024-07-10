const user = {
    username:"gagan",
    price : 99,
    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to the website`);
        // console.log(this);
    }
}
user.welcomeMessage();

user.username = 'yash';
user.welcomeMessage();      //here it will show yash because of this refers to the current senerio...and here the name is changed to yash..

// console.log(this);      //it will show {} because of the node environment....    it will print inside any function only...




//*************************** */
function chai(){
    let username = 'gagan';
    console.log(this.username);         //it will show undefined because this concept only works in object senerio.
}
// chai();



//*********************ARROW FUNCTION    */

// () =>{}              -----arrow function..


 const coffee = () => {           //here instead of writing function we write () =>
    let username = 'gagan'
    // console.log(this);              //it will also show undefined...
}

// coffee();




//************************************* */

//basic syntax-----

// const addTwonumbers = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwonumbers(3,5));

//advanced syntax---

// const addTwonumbers = (num1 , num2) =>(num1+num2)     //we can also define by this way... if {} is used then return is mandatory... but in () it is not...
// console.log(addTwonumbers(2,2));    


//for object too.....

const addTwonumbers = (num1 , num2 ) => ({username :"gagan"});      //for accessing the object we will use () outside...
console.log(addTwonumbers(2,4));