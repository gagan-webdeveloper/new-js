const myarr = [1,2,3,4];
console.log(myarr[1]);

 myarr.push(6);         //it pushes the value in the end ...
 myarr.pop();       //it deletes the value located at the last index....

 //ushift adds in the front of the array , wheras shift delets the starting elements...
 
 console.log(myarr);


 const newArr = myarr.join();       // it converts arrays to the strings.
    console.log(newArr);
    


    //splice , slice...


console.log("A" , myarr);

const arrN1 = myarr.slice(1,3);
console.log(arrN1);

console.log("B" , myarr);
const arrN2 = myarr.splice(1,3);
console.log(arrN2);

console.log("c" , myarr);       //splice changes the value permanently , but slice doesnt ...

