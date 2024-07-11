const myobj = {
    js:"javascript",
    cpp:"c++",
    py: "python",
    swift:"swift by apple"
}

for(const key in myobj){        //we can print keys using this..
    // console.log(key);
}


//for finding values.....
for(const keys in myobj){
    // console.log(myobj[keys]);
}


//****************************KEYS IN ARRAY RETURNS 0,1,2,3,4... */

const programming = ['js' , 'ruby' , 'swift' , 'cpp'];
for(const keys in programming){
    console.log(keys);
}

//for values....

for(const keys in programming){
    console.log(programming[keys]);
}