// const coding = ['js', 'ruby', 'javascript' , 'cpp']
// coding.forEach(  function(name){
//     // console.log(name);
// })

//by arrow function------------

// coding.forEach(  (item) =>{
//     console.log(item);
// })


//we can also do the same by declaring a function and giving its referance....

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);


//we have access of many things such as index, array....

// coding.forEach(  (item , index , array) =>{
//     console.log(item , index , array);
// })



//******************************** */
const coding = [
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"python",
        languageFile:"py"
    },
    {
        languageName:"ruby",
        languageFile:"rub"
    }
]
coding.forEach( (item)=>{
    // console.log(item);
})

//we can also check specific things too...

coding.forEach( (item) =>{
    console.log(item.languageName);
})