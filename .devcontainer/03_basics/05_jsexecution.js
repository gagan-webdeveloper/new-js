//javascript runs code in two segments ... one global execution context is formed >>>which is stored in 'this'..
/*
2..global execution for browser is different from the node environment and other environment....
3. in browser value of this is :: windows object./..
*/


//javascript executes in three  contexts.......

/*
1.. global execution context..
2.. function execution context
3.. eval execution context...
*/

//javascript code executed in two phases....

/*
1.. memory allocation phase.    (memory creation phase or creation phase..)
2.. execution phase...
*/


let val1 =10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1+num2;
    return total;
}
let resultOne = addNum(3,6);
let resultTwo = addNum(5,3);
console.log(resultOne);
console.log(resultTwo);

//phase 1 ---memory allocation phase...
 /*
..val1 = undefined;
..val2 = undefined,
addNum == defination would execute , but values will not be pssed...
reslutOne == undefined.
resultTwo == undefined..
 */

//phase 2 == execution phase...
/*
    val1= 10;
    val2 = 5,
    upto line 26-29 , nothing will execute as its defination is defined in memory allocation phase..
when the addnum comes for the execution.... it creates a new environmrnt for the execution...


*************here also two phases will occur ---memory allocation phase and execution phase...
{in memory phase values are defined as ---
    val1 = undefined,
    val2 = undefined,
    total = undefined,
}
    (in execution phase---
    val1 = 10,
    val2 = 5,
    total = 15,
    ...this toal will return in global executional context..
    )
    the new environment will be deleted after this execution...

    same happens in last line result 2 ..... same type of environment is created ,and deleted after execution..
*/



//**********************************CALL STACK  +++++++++++++++++++++++++ */

/*
    Call stack is a box formed , in this too one box is formed , and global execution takes place , and three functions are presented , all functions are executed one by one ....

    for more refer ----- https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25
    at 20.43 min...


    one function goes inside , then it comes out , then other function goes inside , after execution it comes out , and same is for third function..
    

*/