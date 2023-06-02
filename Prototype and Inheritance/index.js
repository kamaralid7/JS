let arr = ["Kamarali", "Usman"];
console.log("%c arr.__proto__","color: red;  font-size: large");
console.log(  arr.__proto__);

console.log("%c Array.prototype", "color: red;  font-size: large");
console.log(Array.prototype);
console.log("%c arr.__proto__.__proto__" , "color: #9C51B6;  font-size: large")
console.log(arr.__proto__.__proto__)
console.log("%c Object.prototype", "color: #9C51B6;  font-size: large");
console.log(Object.prototype);
console.log("%c arr.__proto__.__proto__.__proto__", " font-size: large")
console.log(arr.__proto__.__proto__.__proto__)

let object = {
    name: "Kamarali",
    city: "Pune",
    getIntro: function () {
        console.log(this.name + " from " + this.city);                
    }
}

// same os Object.prototype
console.log("%c object.__proto__", "color: #9C51B6;  font-size: large")
console.log(object.__proto__)


function fun(){
    console.log('This is a function');
}

console.log("%c fun.__proto__", "color: #A83731;  font-size: large");
console.log(fun.__proto__);
console.log("%c Function.prototype", "color: #A83731;  font-size: large");
console.log(Function.prototype);
console.log("%c fun.__proto__.__proto__" , "color: #9C51B6;  font-size: large")
console.log(fun.__proto__.__proto__)
console.log("%c Object.prototype", "color: #9C51B6;  font-size: large");
console.log(Object.prototype);
console.log("%c arr.__proto__.__proto__.__proto__", " font-size: large")
console.log(arr.__proto__.__proto__.__proto__)


let object2 = {
    name: "Object 2 KD"
}

// Never do tis

object2.__proto__ = object;

console.log( object2.city );
console.log(object.getIntro());
console.log(object2.getIntro());

Function.prototype.myBind = function(){
    console.log('%c This function is added in Prototype', 'color: #E936A7; font-size: large')
}

fun.__proto__.myBind();

function fun2(){

}

fun2.myBind();