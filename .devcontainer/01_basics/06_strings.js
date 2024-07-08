let name = "gagan";
let repocount = 50;

console.log(`hello my name is ${name} and my repocount is ${repocount} in number`);

let gameName = new String("gaganyadav")
console.log(gameName[9]);
console.log(gameName.__proto__);        //it tells about the string is in the form of object...

console.log(gameName.length);           
console.log(gameName.charAt(2));            //it tells about which letter is located on index 2
console.log(gameName.indexOf("y"));         //it tells about the index of the letter y


let newName = gameName.slice(0 , 8);
console.log(newName);               

let anotherName = gameName.slice(-9,5);
console.log(anotherName);


//************TRIM */

let anotherString = "     gagan     ";
console.log(anotherString);
console.log(anotherString.trim());

//***********REPLACE */

    const url = "https://gagan.com/gagan%20yadav";
    console.log(url.replace("%20" , "-"));

    console.log(url.includes("gagan"));         //it tells wether gagan is present in the string or nor...c