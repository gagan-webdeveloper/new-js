// datatypes are categorised in 2 main parts...

//************PRIMITIVE***************** */ (call by value!!)

//7types:: string,number , boolean , null , undefined , symbol(to make any value unique) , bigint;


/********************************NON-PRIMITIVE*********************** (by referance)

arrays , objects , functions

*/

//***************ARRAYS::::: */

let heroes = ["shaktiman" , "logo" , "naagraaj"];

//**********OBJECTS::::  */

    let myobj = {
        name:"gagan",
        age:18,
        city:"chennai"
    }

 //**************FUNCTIONS********** */
 
let myfunction = function(){
    console.log("hello world!!");
 }











const id = Symbol("123");
const newId = Symbol("123");        //even if we give same value to the symbol , its work is to assign different values..

console.log(id===newId);

const bignumber = 14432325432345325433n     //always use n in the end for representing the big int values..







//*************RETURN TYPES OF THE DATA TYPES*********************** */

// ) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object




//**********************************************++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//  ********************************MEMORY***********************************************


// stack (primitive datatypes)(change occurs in the copy of the datatype ) ,,, heep (non-primitive)(change in real value!!)

let tubeName = "chai aur code";

let realname = tubeName;

realname = "Gagan";

console.log(tubeName);
console.log(realname);          //here original value is not passed , change occurs only in the copy of the value...



//********************HEEP */

let userone = {
    email:"abc123@google.com",
    city:"chennai"
}

let userTwo = userone;

userTwo.email = "gaganyadav@google.com"

console.log(userone.email);
console.log(userTwo.email);         //here change occurs in the original value , not in the copy..
