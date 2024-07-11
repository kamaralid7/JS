# WHAT IS CURRYING IN JAVASCRIPT?

Currying in JavaScript transforms a function with multiple arguments into a nested series of functions, each taking a single argument. Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.


Function currying is a technique in functional programming and JavaScript that allows you to transform a function with multiple arguments into a sequence of nested functions. Each nested function takes one argument at a time until all arguments have been supplied, at which point the original function is executed with those arguments.

Here’s how function currying typically works:

1. **Transforming the Function**: Instead of a function that takes multiple arguments `(a, b, c)`, currying transforms it into a series of unary (single-argument) functions, like `(a) => (b) => (c) => {...}`.

2. **Step-by-step Execution**: Each function in the sequence accepts one argument and returns another function, until all arguments are provided. The final function in the sequence executes the original function with all the accumulated arguments.

3. **Example**:
   ```javascript
   // Non-curried function
   function add(a, b, c) {
       return a + b + c;
   }

   // Curried version
   function curriedAdd(a) {
       return function(b) {
           return function(c) {
               return a + b + c;
           };
       };
   }

   // Usage of curried function
   console.log(curriedAdd(1)(2)(3)); // Output: 6
   ```

4. **Benefits**:
   - **Partial Application**: Currying allows you to partially apply a function by fixing some arguments and creating a new function that takes the remaining arguments.
   - **Modularity**: Curried functions are composable and modular, making them easier to reuse and combine with other functions.
   - **Flexibility**: It provides a flexible way to create functions tailored to specific use cases by supplying arguments incrementally.

5. **Application**:
   - **Functional Programming**: Currying is commonly used in functional programming paradigms where functions are treated as first-class citizens.
   - **Higher-order Functions**: It facilitates the creation of higher-order functions that can generate new functions based on existing ones.

Overall, function currying enhances the flexibility and modularity of functions, making them more adaptable and reusable in various programming scenarios.



# Why is currying useful in javascript?
It helps us to create a higher-order function

It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.

It is very useful in building modular and reusable code

It helps us to avoid passing the same variable multiple times

It makes the code more readable


Currying is particularly useful in JavaScript for several reasons, especially in functional programming and when working with higher-order functions:

1. **Partial Application**: Currying allows you to partially apply a function by fixing some arguments. This means you can create a new function that retains some of the arguments of the original function and expects the remaining arguments. This partial application technique is useful when you want to reuse a function with some arguments predefined.

   ```javascript
   // Example of partial application using currying
   function add(a, b, c) {
       return a + b + c;
   }

   // Curried version
   function curriedAdd(a) {
       return function(b) {
           return function(c) {
               return a + b + c;
           };
       };
   }

   const add2 = curriedAdd(2); // Partially apply `a = 2`
   const add2and3 = add2(3);    // Partially apply `b = 3`
   console.log(add2and3(4));    // Output: 9
   ```

2. **Function Composition**: Curried functions are composable. You can easily combine them with other functions to create more complex functions. This composability is key in functional programming where functions are often used as building blocks for larger, more specialized functions.

   ```javascript
   // Example of function composition with currying
   function multiply(a) {
       return function(b) {
           return a * b;
       };
   }

   const multiplyBy2 = multiply(2);
   const add5 = curriedAdd(5);

   const result = multiplyBy2(add5(3)); // (2 * (5 + 3)) = 16
   console.log(result); // Output: 16
   ```

3. **Readability and Maintainability**: Currying can make code more readable and maintainable by breaking down complex functions into smaller, focused functions. Each curried function handles only one argument, which can improve clarity and reduce cognitive load when understanding and debugging code.

4. **Flexibility**: Currying allows you to create functions that are more flexible and adaptable to different scenarios. By partially applying arguments, you can create specialized functions on the fly, tailored to specific use cases without modifying the original function.

5. **Higher-Order Functions**: JavaScript supports higher-order functions, which are functions that can take other functions as arguments or return functions as results. Currying fits naturally within this paradigm, enabling the creation of higher-order functions that generate new functions based on existing ones.

In essence, currying enhances the power and flexibility of functions in JavaScript, making them more modular, reusable, and easier to work with in functional programming paradigms. It encourages a more declarative style of programming and facilitates the creation of functions that are versatile and specialized at the same time.

