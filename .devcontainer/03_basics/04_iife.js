    //immediately invoked function expression.....      used for removing the pollution of the global scope , iife is used...

// ()() // first is for function decelaration and other is for execution..

(function chai (){
    console.log(`DB CONNECTED`)
}) ();


// (function aurcode(){                     named iife
//     console.log(`DB CONNECTED TWO`)
// })();


//WE CAN ALSO DO WITH THE ARROW FUNCTIONS TOO.....

((name) =>{                 //unnamed iife...
        console.log(`DB CONNECTED THREE ${name}`)
    })('gagan');