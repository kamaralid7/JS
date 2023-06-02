# Prototype

# In case of array

arr.__proto__ is simmilar to Array.prototype

arr.__proto__.__proto__ is an Object and is same as Object.prototype

arr.__proto__.__proto__.__proto__ is null


# In case of Objects

object.__proto__ is same as Object.prototype

object.__proto__.__proto__ is null


# In case of functions

fun.__proto__ is simmilar to Function.prototype
fun.__proto__.__proto__ is an Object which is equivalent to Object.prototype

# Everything in javascript is an object!
Wether you make an array or an object or a function down the prototype chain end up being an object

# Prototype chain
The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. 

Every object can have exactly one prototype object. That prototype object can also have a prototype object, and so on, creating a chain of inheritied properties and methods.

If we create a function it has prototype of Function.prototype.prototype is an Object which is equivalent to Object.prototype 
this is the whole prototype chain and is known as prototype chain which ends at null

Object.prototype.prototype is null which ends prototype chain

# Inhertance

When we access any property which is not in the object like object2.name
It will check in its prototype chain if it available 

