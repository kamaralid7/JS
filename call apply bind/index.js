let name = {
    firstname: "Kamarali",
    lastName: "Dukandar",
    printFullName: function(){
        console.log(this.firstname + " " + this.lastName);
    }
}

let name2 = {
    firstname: "M.S",
    lastName: "Dhoni",

}

name.printFullName();

// function borrowing
name.printFullName.call(name2);