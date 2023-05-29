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