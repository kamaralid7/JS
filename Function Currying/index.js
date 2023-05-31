// Using Bind Method

let multiply = function(x,y){
    console.log(x*y);
}

multiply(5,6);

let multiplyByTwo = multiply.bind(this,2)
// this is equivalent to 
/*
let multiplyByTwo = function(y){
    let x = 2;
    console.log(X*y);
}
*/

multiplyByTwo(5)

let multiplyByThree = multiply.bind(this,3);

multiplyByThree(5)


// Using function closures
/* 
Even after function y is returned it still has access to value x
It is like presetting the value of x
*/

let multipication = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multipicationByTwo = multipication(2);
multipicationByTwo(3)