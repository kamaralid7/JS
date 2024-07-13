In ES6 (ECMAScript 2015), the `reduce` method is available on arrays. It's used to transform an array into a single value, often by applying a function to each element of the array.

Here's a basic example of how `reduce` works:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Example: Summing up all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

In this example:
- `accumulator` is the accumulated result after each iteration.
- `currentValue` is the current element being processed in the array.
- `0` is the initial value of the accumulator (optional, can be omitted).

You can also use `reduce` to perform other operations like calculating averages, finding maximum values, flattening arrays, etc. It's a powerful method for handling array transformations in JavaScript.

## Condensing list with reduce in ES6

To condense a list using `reduce` in ES6, you can use it to concatenate or accumulate values based on some operation. Here's a general example:

```javascript
// Example: Summing up an array of numbers
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```

In this example:
- `reduce` takes a callback function with two parameters: `accumulator` and `currentValue`.
- The second argument (`0` in this case) initializes the `accumulator`.
- The callback function defines how the values are combined (`accumulator + currentValue`).

You can modify the callback function to perform different operations based on what you want to achieve with your list.

## A touch more of reduce

Sure! Let's explore a few more examples of using `reduce` in JavaScript (ES6) to condense or transform lists:

### Example 1: Concatenating strings
```javascript
const words = ["Hello", " ", "World", "!"];

const concatenated = words.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, "");

console.log(concatenated); // Output: "Hello World!"
```

### Example 2: Flattening an array of arrays
```javascript
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
```

### Example 3: Counting occurrences of items in an array
```javascript
const fruits = ["apple", "banana", "orange", "apple", "banana"];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(fruitCount); // Output: { apple: 2, banana: 2, orange: 1 }
```

### Example 4: Transforming array into object
```javascript
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const transformed = data.reduce((accumulator, currentValue) => {
  accumulator[currentValue.id] = currentValue.name;
  return accumulator;
}, {});

console.log(transformed); // Output: { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }
```

### Example 5: Calculating average of numbers
```javascript
const numbers = [10, 20, 30, 40, 50];

const average = numbers.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return accumulator / array.length;
  } else {
    return accumulator;
  }
}, 0);

console.log(average); // Output: 30
```

These examples showcase various ways `reduce` can be used to condense or transform arrays in JavaScript. Each `reduce` operation starts with an initial value (`""`, `[]`, `{}`, `0` in these examples) and accumulates values based on the logic defined in the callback function.

## Parenthesis Problem

Problem statement: given a set of characters and have to check if the parenthesis in string is balanced

```javascript
'(())', ')(',..
```

To check if parentheses in a string are balanced using `reduce` in JavaScript, you can track the balance using an accumulator and ensure that at no point does the accumulator go negative (which would indicate unbalanced parentheses). Here's how you can approach it:

```javascript
function isBalanced(str) {
  return !str.split('').reduce((accumulator, char) => {
    if (accumulator < 0) return accumulator; // if accumulator < 0, unbalanced
    if (char === '(') return ++accumulator;
    if (char === ')') return --accumulator;
    return accumulator;
  }, 0);
}

// Example usage:
console.log(isBalanced("((()))")); // Output: true
console.log(isBalanced("(()"));   // Output: false
console.log(isBalanced(")()("));  // Output: false
console.log(isBalanced(""));      // Output: true (empty string is considered balanced)
```

### Explanation:
- `split('')` breaks the string into an array of characters.
- `reduce` iterates over each character, adjusting the `accumulator` based on whether it encounters an opening `(` or closing `)` parenthesis.
- If `accumulator` becomes negative at any point, it means there are more closing parentheses than opening ones, indicating imbalance.
- At the end of the reduction, the function returns `true` if `accumulator` is `0` (balanced) and `false` otherwise.

This approach efficiently checks for balanced parentheses using `reduce` by leveraging the accumulator to keep track of the nesting level.

## More Explanation
Certainly! Let's break down how the `reduce` function iterates over each character in the string to check for balanced parentheses:

### Step-by-Step Explanation:

1. **String Splitting:**
   ```javascript
   str.split('')
   ```
   - `split('')` converts the input string `str` into an array of characters. For example, if `str` is `"((()))"`, it becomes `['(', '(', '(', ')', ')', ')']`.

2. **Reduce Function Initialization:**
   ```javascript
   .reduce((accumulator, char) => {
     // reduce logic
   }, 0);
   ```
   - `reduce` starts with an initial `accumulator` value of `0`. This accumulator will be used to keep track of the balance of parentheses.

3. **Iterating Over Characters:**
   ```javascript
   (accumulator, char) => {
     // reduce logic
   }
   ```
   - For each character (`char`) in the array (starting from left to right), the `reduce` function executes the provided callback function.

4. **Adjusting the Accumulator Based on Characters:**
   ```javascript
   if (char === '(') return ++accumulator;
   if (char === ')') return --accumulator;
   return accumulator;
   ```
   - If the character is `'('`, the accumulator is incremented (`++accumulator`). This increment indicates the start of a nested level of parentheses.
   - If the character is `')'`, the accumulator is decremented (`--accumulator`). This decrement indicates the end of a nested level of parentheses.
   - If the character is neither `'('` nor `')'`, the accumulator remains unchanged (`return accumulator;`).

5. **Checking for Imbalance:**
   ```javascript
   if (accumulator < 0) return accumulator;
   ```
   - During each iteration, if the accumulator becomes negative (`< 0`), it means there are more closing parentheses than opening ones encountered so far. This indicates that the parentheses are unbalanced.

6. **Final Result:**
   ```javascript
   return !str.split('').reduce((accumulator, char) => {
     // reduce logic
   }, 0);
   ```
   - The final result of the `reduce` operation is `true` if the accumulator remains `0` after iterating through all characters. This indicates that all opening parentheses have a corresponding closing parenthesis at the correct level of nesting, making the parentheses balanced.
   - If the accumulator is not `0` or goes negative during iteration, the result is `false`, indicating unbalanced parentheses.

### Example:
For the string `"((()))"`:
- Starts with `0` accumulator.
- Iterates through each character:
  - `(` -> `accumulator` becomes `1`.
  - `(` -> `accumulator` becomes `2`.
  - `(` -> `accumulator` becomes `3`.
  - `)` -> `accumulator` becomes `2`.
  - `)` -> `accumulator` becomes `1`.
  - `)` -> `accumulator` becomes `0`.
- At the end of iteration, `accumulator` is `0`, indicating balanced parentheses.

For the string `"(()"`:
- Starts with `0` accumulator.
- Iterates through each character:
  - `(` -> `accumulator` becomes `1`.
  - `(` -> `accumulator` becomes `2`.
  - `)` -> `accumulator` becomes `1`.
- At the end of iteration, `accumulator` is `1`, indicating unbalanced parentheses (more opening than closing).

This method efficiently checks for balanced parentheses using `reduce` by tracking the nesting level with the accumulator variable.


## Distance travelled 

To calculate the total distance traveled using `reduce`, you can apply it to an array of distances or objects containing distances. Let's explore both scenarios:

### Example 1: Array of Distances

Assume you have an array of distances traveled in kilometers:

```javascript
const distances = [10, 15, 20, 25, 30];

const totalDistance = distances.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Total distance traveled:", totalDistance, "kilometers");
```

In this example:
- `distances` is an array of distances `[10, 15, 20, 25, 30]`.
- `reduce` iterates over each element in the array, accumulating the total distance traveled (`accumulator + currentValue`).
- The initial value of the accumulator (`0`) ensures the calculation starts from zero.

### Example 2: Array of Objects with Distances

If you have an array of objects where each object contains a distance property:

```javascript
const trips = [
  { distance: 10 },
  { distance: 15 },
  { distance: 20 },
  { distance: 25 },
  { distance: 30 }
];

const totalDistance = trips.reduce((accumulator, trip) => {
  return accumulator + trip.distance;
}, 0);

console.log("Total distance traveled:", totalDistance, "kilometers");
```

In this example:
- `trips` is an array of objects, where each object `{ distance: ... }` represents a trip with a distance property.
- `reduce` iterates over each object in the array, accessing `trip.distance` to accumulate the total distance traveled (`accumulator + trip.distance`).
- The initial value of the accumulator (`0`) ensures the calculation starts from zero.

### Explanation

- **Reduce Function**: The `reduce` function is used to iteratively sum up the distances. It takes a callback function with two parameters: `accumulator` (accumulated value) and `currentValue` or `trip` (current element or object in the array).
  
- **Accumulator**: The `accumulator` variable stores the accumulated distance as the reduce function iterates through each element or object in the array.
  
- **Initial Value**: The `0` passed as the second argument to `reduce` initializes the `accumulator` to `0`. This ensures that the accumulation starts from zero before adding each distance.

These examples demonstrate how `reduce` can be effectively used to compute a total value (in this case, the total distance traveled) from an array of numerical values or objects containing numerical properties.

## Reducing Properties

Reducing properties in JavaScript typically involves using `reduce` to aggregate values based on specific properties of objects within an array. Let's explore a couple of examples to understand how this works:

### Example 1: Summing Property Values

Suppose you have an array of objects representing expenses, and you want to calculate the total amount spent:

```javascript
const expenses = [
  { id: 1, amount: 100 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 },
  { id: 4, amount: 75 }
];

const totalAmountSpent = expenses.reduce((accumulator, expense) => {
  return accumulator + expense.amount;
}, 0);

console.log("Total amount spent:", totalAmountSpent);
```

In this example:
- `expenses` is an array of objects where each object has an `amount` property.
- `reduce` iterates over each object in the `expenses` array, accessing `expense.amount` to accumulate the total amount spent (`accumulator + expense.amount`).
- The initial value of the accumulator (`0`) ensures the calculation starts from zero.

### Example 2: Finding Maximum Property Value

Let's find the maximum rating from an array of objects representing employees:

```javascript
const employees = [
  { id: 1, name: "Alice", rating: 4.5 },
  { id: 2, name: "Bob", rating: 3.8 },
  { id: 3, name: "Charlie", rating: 4.2 },
  { id: 4, name: "David", rating: 4.0 }
];

const maxRating = employees.reduce((max, employee) => {
  return (employee.rating > max) ? employee.rating : max;
}, 0);

console.log("Maximum rating:", maxRating);
```

In this example:
- `employees` is an array of objects where each object has a `rating` property.
- `reduce` iterates over each object in the `employees` array, comparing `employee.rating` with `max` to find the maximum rating.
- The initial value of `max` (`0`) ensures that the comparison starts correctly.

### Explanation

- **Reduce Function**: The `reduce` function iterates over each element in the array and accumulates a value (`accumulator`) based on the logic defined in the callback function.
  
- **Accumulator**: The `accumulator` variable stores the accumulated result as the reduce function iterates through each object in the array.
  
- **Initial Value**: The second argument (`0` in these examples) passed to `reduce` initializes the `accumulator` to the starting value for aggregation. For summing or finding maximum values, this typically starts at `0` or `Number.MIN_VALUE`/`-Infinity` respectively.

These examples illustrate how `reduce` can be used to effectively aggregate or reduce properties from an array of objects, whether it's summing numeric values like expenses or finding extremum values like maximum ratings. Adjust the logic within the callback function to suit different aggregation needs based on the properties of your objects.

## Hardmode: Custom unique helper

Creating a custom `unique` helper function in JavaScript involves using techniques like `reduce` to accumulate unique values from an array based on specific criteria, such as uniqueness of strings or uniqueness of objects based on a key. Let's explore how to implement a custom `unique` function in "hard mode" using JavaScript:

### Custom `unique` Helper Function

#### Example 1: Unique Strings

Let's create a function `uniqueStrings` that filters out duplicate strings from an array:

```javascript
function uniqueStrings(arr) {
  return arr.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
}

// Example usage:
const fruits = ['apple', 'banana', 'orange', 'apple', 'kiwi', 'banana'];
const uniqueFruits = uniqueStrings(fruits);
console.log(uniqueFruits); // Output: ['apple', 'banana', 'orange', 'kiwi']
```

**Explanation:**
- The `reduce` function iterates over each element (`current`) in the `arr`.
- The `accumulator` starts as an empty array (`[]`).
- Inside the reduce callback:
  - `!accumulator.includes(current)` checks if `current` is not already in `accumulator`.
  - If not included, `accumulator.push(current)` adds `current` to `accumulator`.
- `uniqueStrings` function returns an array of unique strings.

#### Example 2: Unique Objects by Key

Let's extend this to handle objects with a specific unique key:

```javascript
function uniqueObjectsByKey(arr, key) {
  return arr.reduce((accumulator, current) => {
    const uniqueKeys = accumulator.map(item => item[key]);
    if (!uniqueKeys.includes(current[key])) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
}

// Example usage:
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'Charlie' }
];
const uniqueUsers = uniqueObjectsByKey(users, 'name');
console.log(uniqueUsers);
// Output: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 4, name: 'Charlie' } ]
```

**Explanation:**
- `uniqueObjectsByKey` function takes an array (`arr`) and a key (`key`) to determine uniqueness.
- `reduce` function iterates over each element (`current`) in `arr`.
- `accumulator` starts as an empty array (`[]`).
- Inside the reduce callback:
  - `uniqueKeys` extracts all existing values of `key` from `accumulator`.
  - `!uniqueKeys.includes(current[key])` checks if `current[key]` is not already in `uniqueKeys`.
  - If not included, `accumulator.push(current)` adds `current` to `accumulator`.
- `uniqueObjectsByKey` function returns an array of unique objects based on the specified `key`.

### Conclusion

These examples demonstrate how to create custom `unique` helper functions using `reduce` in JavaScript. Depending on your specific needs, you can modify the criteria for uniqueness (like strings, objects by a specific key) to fit different data structures and requirements in your applications. Custom helpers like these leverage JavaScript's functional programming capabilities to handle data transformation and manipulation effectively.

