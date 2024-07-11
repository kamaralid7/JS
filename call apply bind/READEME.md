# Call Apply and Bind

# call()
Using Call method we can do function borrowing
We can borrow functions from other objests and use data of other objects

Each and every method in JS has special access to call method
it is useful to borrow functions from other method

# apply()
difference between apply and call() method is the way we pass arguments
first argument is the reference to this variable
second argument is the list to the arguments we have to pass in function
instead of passing this parameters individually we pass the arguments in an arraylist

# bind()
bind() methos is excatly same as the call methos but it 
binds the method with the object and
returns us the copy of that method

In JavaScript, `call`, `apply`, and `bind` are methods used to manipulate the `this` context of a function. Here's how each of them works and how you can use them for function borrowing:

1. **Call**:
   - Syntax: `function.call(thisArg, arg1, arg2, ...)`
   - `call` allows you to invoke a function with a specified `this` context and arguments passed individually.
   - Example of function borrowing using `call`:
     ```javascript
     const obj1 = {
         name: 'Object 1',
         sayHello: function() {
             return `Hello from ${this.name}`;
         }
     };

     const obj2 = {
         name: 'Object 2'
     };

     // Borrow sayHello from obj1 for obj2
     const greeting = obj1.sayHello.call(obj2);
     console.log(greeting); // Output: Hello from Object 2
     ```

2. **Apply**:
   - Syntax: `function.apply(thisArg, [argsArray])`
   - `apply` is similar to `call`, but it accepts arguments as an array.
   - Example of function borrowing using `apply`:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];

     const max = Math.max.apply(null, numbers);
     console.log(max); // Output: 5
     ```

3. **Bind**:
   - Syntax: `function.bind(thisArg, arg1, arg2, ...)`
   - `bind` returns a new function with a specified `this` context and initial arguments. It doesn't invoke the function immediately.
   - Example of function borrowing using `bind`:
     ```javascript
     const module = {
         x: 42,
         getX: function() {
             return this.x;
         }
     };

     const unboundGetX = module.getX;
     console.log(unboundGetX()); // Output: undefined (this.x is not bound)

     const boundGetX = module.getX.bind(module);
     console.log(boundGetX()); // Output: 42
     ```

These methods are powerful tools for managing function contexts in JavaScript, especially useful in scenarios like method borrowing, where you want to reuse methods from one object in another object context.