let name = {
    firstname: "Kamarali",
    lastName: "Dukandar",

}

let name2 = {
    firstname: "M.S",
    lastName: "Dhoni",

}

printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastName + " from " + hometown + ", " + state);
}

printFullName.call(name, "Pune" , "Maharashtra");

// function borrowing
printFullName.call(name2, "Ranchi" , "Jharkhand");

printFullName.apply(name2, ["Ranchi" , "Jharkhand"]);

//bind method
// it will create a copy of printFullName and bind name object and return that function
// it will not call the function directly but will rather bind that function and reurn us the function
let printMyName = printFullName.bind(name, "Pune" , "Maharashtra");
console.log(printMyName);


printMyName();