const Tinder ={};
Tinder.name='gagan';
Tinder.age  =   18;
Tinder.id   =   'abc@123';
Tinder.loggedin =   false;

// console.log(Tinder);

let regularUser = {
    email:"some@google.com",
    fullName:{
        userName:{
            firstName:"gagan",
            lastName:"yadav",
        }
    }
}
// console.log(regularUser.fullName.userName.firstName);



const obj1 = {1:'a', 2:'b'};
const obj2 = {3:"c" , 4:'d'};

const obj3 = Object.assign({} ,obj1, obj2);         //used to add up all objects... use {} for conformation of return type object...
// const obj3 = {...obj1 , ...obj2};       //this is other syntax of writing the above line....

// console.log(obj3);


//when value comes from the data base ... syntax used is......


const user =[
    {
        name:'gagan',
        city:"chennai"
    },
    {
        name:"yash",
        city:"alaska"
    }
]
//for accesing the values we use the following syntaxx....
// console.log(user[0].name);
//********** */

// console.log(Tinder);
//we can also print the keys of this object...
// console.log(Object.keys(Tinder));       //this is used at the time of the databases.

//same way values are also printed..
// console.log(Object.values(Tinder));
// console.log(Object.entries(Tinder));        //used as it converts all keys and values in the form of arrays..


//we can also check wether any property is present or not...
// console.log(Tinder.hasOwnProperty("loggedin"));



//******************************************************************************************************* */

const course = {
    courseName:'webdevelopment',
    courseInstructor :"hitesh "
}
//for accesing the values , we used to use an old method ---- course.courseName; 
//new-----

const {courseInstructor:instructor} = course;
//here we will call courseinstrctor as instructor and it will be refered to course automatically..(destructuring).

console.log(instructor);





//++++++++++++++++++++++++++++++++++++++++++++++*************************************************************
                                        //API CONCEPTS...........

   //************JSON----------- */  it is described as --- {}
   
  {
    name = "gagan",
    courseName= "js in hindi",
    price = 'free'
  } //here keys and values both are in the form of strings....

  //it can also be in the form of arrays too...

  [                 //for more info , check json formattor...
    {},
    {}
  ]



