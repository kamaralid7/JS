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


In JavaScript, prototypes and inheritance are fundamental concepts that define how objects inherit properties and methods from other objects.

### Prototype in JavaScript:

1. **Prototype Definition:**
   - Every object in JavaScript has a prototype. This prototype is also an object.
   - Prototypes in JavaScript form a chain, where each object inherits properties and methods from its prototype.

2. **Object Creation:**
   - Objects in JavaScript can be created in various ways:
     - **Literal Notation:** `let obj = {};`
     - **Constructor Notation:** `let obj = new Object();`

3. **Prototype Chain:**
   - When an object is created, it inherits properties from its prototype.
   - This forms a chain of prototypes. If a property or method is not found on the object itself, JavaScript looks up the prototype chain until it finds it or reaches the end (`null`).

4. **`__proto__` Property:**
   - In JavaScript, every object has a special property called `__proto__`.
   - `__proto__` points to the object's prototype from which it inherits properties.

### Inheritance in JavaScript:

1. **Inheritance Mechanism:**
   - JavaScript objects use **prototypal inheritance**.
   - Objects can inherit properties and methods from other objects by leveraging the prototype chain.

2. **Creating Subtypes:**
   - You can create subtypes (child objects) that inherit from a parent object (prototype) using constructor functions or ES6 classes.

3. **Constructor Functions:**
   - Constructor functions can be used to create objects that inherit properties and methods defined on their prototype.

   ```javascript
   function Person(name) {
       this.name = name;
   }

   Person.prototype.sayHello = function() {
       console.log(`Hello, my name is ${this.name}.`);
   };

   let john = new Person('John');
   john.sayHello(); // Output: Hello, my name is John.
   ```

4. **ES6 Classes:**
   - ES6 introduced class syntax, which provides a more familiar way to achieve inheritance in JavaScript.

   ```javascript
   class Person {
       constructor(name) {
           this.name = name;
       }

       sayHello() {
           console.log(`Hello, my name is ${this.name}.`);
       }
   }

   let john = new Person('John');
   john.sayHello(); // Output: Hello, my name is John.
   ```

### Key Points:

- **Prototype:** An object from which other objects inherit properties.
- **Inheritance:** The process by which one object can acquire properties of another object.
- **Prototype Chain:** The chain of objects through which JavaScript looks for properties and methods.
- **`__proto__`:** A special property of objects pointing to their prototype.

Understanding prototypes and inheritance is crucial for effective object-oriented programming in JavaScript, allowing for code reusability and maintaining a clear hierarchy of object relationships.

