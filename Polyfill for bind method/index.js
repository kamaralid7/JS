let name = {
    firstName: "Kamarali",
    lastName: "Dukandar",
}

let printName = function(){
    console.log(this.firstName + " " + this.lastName)    
}

let printNameAndHometown = function(hometown, state, country){
    console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + state + ", " + country)
}

let printMyName = printName.bind(name);
printMyName();

let printMyNameAndHometown = printNameAndHometown.bind(name, "Pune")
printMyNameAndHometown("Maharashtra" , "India");
// creating myBind() function which will be simillar to bind()
/*
in order to access it from anywhere we need to add it into function prototype

*/


/*
//this does not handle the arguments passed in function

Function.prototype.myBind = function(...args){
    // this variable will point to -> printName
    let obj = this;
    return function(){
        // we need to pass the name object as a parameter obj.call(name)
        obj.call(args[0]);        
    }
}
*/

// this implementation will not handle the arguments passed in returned function 
//and will have the value of those parameters as undefined
/*
Function.prototype.myBind = function(...args){
    let obj = this;
    // args.sclice(1) will remove the first element and return us all the later elements
    let params = args.slice(1);
    return function(){
        // we need to pass the name object as a parameter obj.call(name)
        // as params will be an array returned from slice method we use the famous apply method
        obj.apply(args[0],params);        
    }
}
*/


Function.prototype.myBind = function(...args){
    let obj = this;    
    let params = args.slice(1);
    // the passed arguments in the below function will handle the arguments passed in second function 
    // we need to pass this args2 in obj.apply()
    return function(...args2){
        // we wil create ans array
        obj.apply(args[0],[...params , ...args2]);        
    }
}

printMyName2 = printName.myBind(name)
printMyName2();

printMyNameAndHometown2 = printNameAndHometown.myBind(name, "Pune" )
printMyNameAndHometown2("Maharashtra" , "India");