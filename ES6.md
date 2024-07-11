ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several significant features to JavaScript. Here are some of the key features:

1. **Let and Const Keywords**:
   - `let`: Block-scoped variable declaration.
   - `const`: Block-scoped constant declaration.

2. **Arrow Functions**:
   - Shorter syntax for writing functions.
   - Lexically binds `this` value.

   ```javascript
   const add = (a, b) => a + b;
   ```

3. **Template Literals**:
   - Multi-line strings and string interpolation using backticks (`` ` ``).

   ```javascript
   const name = 'John';
   const greeting = `Hello, ${name}!`;
   ```

4. **Default Parameters**:
   - Default values for function parameters.

   ```javascript
   function greet(name = 'Guest') {
       console.log(`Hello, ${name}`);
   }
   ```

5. **Destructuring Assignment**:
   - Extract values from arrays or properties from objects into distinct variables.

   ```javascript
   const [a, b] = [1, 2];
   const { name, age } = { name: 'John', age: 30 };
   ```

6. **Rest and Spread Operators**:
   - `...` operator for variable number of arguments and expanding arrays.

   ```javascript
   function sum(...args) {
       return args.reduce((acc, curr) => acc + curr, 0);
   }

   const arr = [1, 2, 3];
   const newArr = [...arr, 4, 5];
   ```

7. **Classes**:
   - Syntactic sugar over JavaScript's existing prototype-based inheritance.

   ```javascript
   class Person {
       constructor(name, age) {
           this.name = name;
           this.age = age;
       }

       greet() {
           console.log(`Hello, my name is ${this.name}`);
       }
   }
   ```

8. **Modules**:
   - `import` and `export` statements for modularizing code.

   ```javascript
   // In math.js
   export function add(a, b) {
       return a + b;
   }

   // In main.js
   import { add } from './math.js';
   ```

9. **Promises**:
   - For asynchronous operations, providing a more manageable way to handle asynchronous code than callbacks.

   ```javascript
   const promise = new Promise((resolve, reject) => {
       // async operation
       if (success) {
           resolve(result);
       } else {
           reject(error);
       }
   });

   promise.then(result => console.log(result)).catch(error => console.error(error));
   ```

10. **Enhanced Object Literals**:
    - Shorter syntax for method definitions, computed property names, and merging objects.

    ```javascript
    const prop = 'name';
    const obj = {
        [prop]: 'John',
        greet() {
            console.log('Hello');
        }
    };
    ```

11. **Iterators and Generators**:
    - Custom iteration behavior for objects and the `function*` syntax for generator functions.

    ```javascript
    function* generator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const gen = generator();
    console.log(gen.next().value); // 1
    ```

12. **Map and Set**:
    - New data structures for collections of values.

    ```javascript
    const map = new Map();
    map.set('key', 'value');
    console.log(map.get('key')); // 'value'

    const set = new Set([1, 2, 3]);
    set.add(4);
    console.log(set.has(2)); // true
    ```

13. **Symbols**:
    - Unique and immutable primitive values used as object property keys.

    ```javascript
    const sym = Symbol('description');
    const obj = {
        [sym]: 'value'
    };
    console.log(obj[sym]); // 'value'
    ```

14. **WeakMap and WeakSet**:
    - Collections of key/value pairs and values, respectively, with weak references to their keys/values.

    ```javascript
    const weakMap = new WeakMap();
    const obj = {};
    weakMap.set(obj, 'value');
    console.log(weakMap.get(obj)); // 'value'
    ```

These features made JavaScript more powerful, expressive, and easier to work with, especially for larger and more complex applications.