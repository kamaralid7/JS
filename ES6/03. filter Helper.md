## How filter works?

In ES6, the `Array.prototype.filter()` method is used to create a new array with all elements that pass a test (predicate) function. Here’s how it works in detail:

### Syntax

The syntax for `Array.prototype.filter()` is straightforward:

```javascript
let newArray = array.filter(function(currentValue, index, array) {
    // Return true if currentValue passes the test, false otherwise
});
```

- **`currentValue`**: The current element being processed in the array.
- **`index`** (Optional): The index of the current element being processed.
- **`array`** (Optional): The array `filter` was called upon.

The `filter()` method calls the provided function once for each element in the array, iterating through each element sequentially.

### How It Works

1. **Iterate Through Array**: The `filter()` method iterates through each element of the array.

2. **Apply Predicate Function**: For each element, it calls the predicate function. This function should return `true` to keep the element, or `false` to discard it.

3. **Build New Array**: Elements for which the predicate function returns `true` are added to a new array.

4. **Return Result**: Finally, `filter()` returns the new array containing only the elements that passed the predicate function’s test.

### Example

Let's consider a simple example to filter even numbers from an array:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]
```

In this example:
- `numbers` is the array we want to filter.
- The predicate function `function(number) { return number % 2 === 0; }` checks if each `number` is even (`number % 2 === 0`).
- Elements that satisfy the condition are added to `evenNumbers`.

### Arrow Function Syntax

With ES6, arrow functions provide a concise way to define predicate functions:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
```

### Handling Objects

You can also filter arrays of objects based on object properties. For example, filtering users by age:

```javascript
let users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];

let olderUsers = users.filter(user => user.age > 30);

console.log(olderUsers); // Output: [{ id: 1, name: 'Alice', age: 30 }, { id: 3, name: 'Charlie', age: 35 }]
```

### Benefits

- **Immutability**: `filter()` does not mutate the original array. Instead, it returns a new array with filtered elements.
- **Readability**: Using `filter()` with arrow functions makes code concise and readable, especially for simple filtering tasks.
- **Flexibility**: You can use `filter()` with complex conditions and custom predicate functions to suit different filtering needs.

Understanding `Array.prototype.filter()` is fundamental for manipulating arrays in JavaScript, offering a clean and efficient way to work with data based on specific criteria.

## Filer 

In ES6, if you're looking to filter data from an array based on certain criteria, you can use the `Array.prototype.filter()` method. Here's a basic example:

```javascript
// Sample array of objects
let users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 28 }
];

// Example of filtering users older than 30
let filteredUsers = users.filter(user => user.age > 30);

console.log(filteredUsers);
```

In this example:
- `users.filter(user => user.age > 30)` filters the `users` array to include only those objects where the `age` property is greater than 30.
- The arrow function `user => user.age > 30` acts as the filtering criteria.

You can adjust the filtering criteria inside the arrow function (`user => user.age > 30`) to match your specific needs, such as filtering based on different properties or more complex conditions.

If you have a more specific scenario or data structure you'd like to filter, feel free to provide details, and I can tailor the example further!

## More on Filter

Sure, filtering in JavaScript ES6 using `Array.prototype.filter()` is quite flexible and powerful. Here are some additional aspects and examples to consider:

### Basic Filtering Example

Let's say you have an array of objects representing products:

```javascript
let products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 80 },
    { id: 4, name: 'Monitor', price: 300 }
];
```

To filter products with a price less than or equal to 100:

```javascript
let cheapProducts = products.filter(product => product.price <= 100);
console.log(cheapProducts);
// Output: [{ id: 2, name: 'Mouse', price: 25 }, { id: 3, name: 'Keyboard', price: 80 }]
```

### Using Multiple Conditions

You can filter based on multiple conditions using logical operators (`&&`, `||`, etc.):

```javascript
let affordableProducts = products.filter(product => product.price <= 100 && product.name.includes('e'));
console.log(affordableProducts);
// Output: [{ id: 2, name: 'Mouse', price: 25 }]
```

### Filtering by String Properties

Filtering can also be applied to string properties, such as filtering users by their name:

```javascript
let users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Alice', role: 'user' },
    { id: 4, name: 'Charlie', role: 'admin' }
];

let filteredUsers = users.filter(user => user.name === 'Alice');
console.log(filteredUsers);
// Output: [{ id: 1, name: 'Alice', role: 'admin' }, { id: 3, name: 'Alice', role: 'user' }]
```

### Handling Empty Results

When filtering, if no elements match the criteria, the resulting array will be empty:

```javascript
let expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);
// Output: []
```

### Custom Filtering Functions

You can use custom functions for complex filtering logic:

```javascript
function filterByRole(users, role) {
    return users.filter(user => user.role === role);
}

let adminUsers = filterByRole(users, 'admin');
console.log(adminUsers);
// Output: [{ id: 1, name: 'Alice', role: 'admin' }, { id: 4, name: 'Charlie', role: 'admin' }]
```

### Note on Immutability

Remember that `Array.prototype.filter()` does not modify the original array; it returns a new array with elements that pass the test. If no elements pass the test, it returns an empty array. This behavior ensures immutability of the original data.

These examples should cover a wide range of scenarios for filtering data in JavaScript using ES6. If you have specific use cases or need further clarification on any aspect, feel free to ask!


## Handelling permission with filter

Handling permissions with filtering in JavaScript typically involves filtering data based on user roles or permissions to restrict access to certain resources or functionalities. Here’s how you can approach it:

### Scenario Setup

Let's consider a simple example where you have a list of resources (like documents or features) and users with different roles:

```javascript
let resources = [
    { id: 1, name: 'Document A', access: ['admin', 'user'] },
    { id: 2, name: 'Document B', access: ['user'] },
    { id: 3, name: 'Feature X', access: ['admin'] },
    { id: 4, name: 'Document C', access: ['user'] }
];

let currentUser = {
    name: 'Alice',
    role: 'admin' // Example user with admin role
};
```

### Filtering Based on Role

You can use `filter()` to retrieve resources accessible to the current user based on their role:

```javascript
// Filter resources accessible to the current user based on role
let accessibleResources = resources.filter(resource => resource.access.includes(currentUser.role));

console.log(accessibleResources);
// Output: [
//   { id: 1, name: 'Document A', access: ['admin', 'user'] },
//   { id: 3, name: 'Feature X', access: ['admin'] }
// ]
```

In this example:
- `currentUser.role` is used to determine which resources the user can access.
- `resource.access.includes(currentUser.role)` checks if the user's role is included in the `access` array of each resource.

### Handling Multiple Roles

If users can have multiple roles, you can adjust the filtering logic to check if any of the user's roles match:

```javascript
// Example user with multiple roles
let currentUser = {
    name: 'Bob',
    roles: ['user', 'editor']
};

// Filter resources accessible to the current user based on any of their roles
let accessibleResources = resources.filter(resource => resource.access.some(role => currentUser.roles.includes(role)));

console.log(accessibleResources);
// Output: [
//   { id: 1, name: 'Document A', access: ['admin', 'user'] },
//   { id: 2, name: 'Document B', access: ['user'] },
//   { id: 4, name: 'Document C', access: ['user'] }
// ]
```

### Advanced Filtering Logic

For more complex scenarios involving permissions or dynamic access rules, you might need to implement custom filtering functions that consider additional factors such as user attributes, permissions stored in a database, or hierarchical roles.

### Frontend Integration

In frontend applications, filtering based on permissions is often used to control UI elements or access to functionality. Frameworks like React, Angular, or Vue.js can manage state and render components based on filtered data retrieved from APIs or stored locally.

### Security Considerations

When implementing permission filtering, ensure that sensitive data or functionalities are properly protected on the server-side as well. Client-side filtering can enhance user experience but should not be relied upon for enforcing security policies alone.

Handling permissions with filtering in JavaScript provides flexibility and control over resource access based on user roles or other contextual factors, contributing to a secure and efficient application design.

## Implementing Reject in filter

In JavaScript's `Array.prototype.filter()` method, you can effectively implement a rejection logic by using the inverse condition that would typically be used for filtering. The `filter()` method constructs a new array by iterating through each element of the original array and including only those elements for which the callback function returns `true`. To implement a `reject` function using `filter`, you can simply reverse the condition that determines whether an element should be included in the filtered array.

Here’s how you can implement a `reject` function:

```javascript
// Original array of numbers
let numbers = [1, 2, 3, 4, 5];

// Function to reject even numbers
let rejectedNumbers = numbers.filter(number => number % 2 !== 0);

console.log(rejectedNumbers);
// Output: [1, 3, 5]
```

### Explanation:

1. **Original Array**: `numbers` is the array containing numbers `[1, 2, 3, 4, 5]`.

2. **Filtering Logic**: The `filter()` method iterates through each `number` in the array. The condition `number % 2 !== 0` checks if `number` is not even. If the condition returns `true`, the number is included in `rejectedNumbers`.

3. **Result**: In this example, only odd numbers `[1, 3, 5]` pass the rejection criteria (not even), and they are included in `rejectedNumbers`.

### Generalizing with a Function:

You can encapsulate this behavior into a reusable function `reject`:

```javascript
function reject(array, predicate) {
    return array.filter(element => !predicate(element));
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];

// Reject even numbers
let rejectedNumbers = reject(numbers, number => number % 2 === 0);

console.log(rejectedNumbers);
// Output: [1, 3, 5]
```

### Explanation:

- **`reject` Function**: Takes an `array` and a `predicate` function. It uses `filter()` to create a new array containing elements for which `predicate(element)` returns `false`.

- **Usage**: `reject(numbers, number => number % 2 === 0)` filters out even numbers from `numbers`.

### Considerations:

- **Negation**: The `predicate` function passed to `reject` should return `true` for elements you want to exclude from the resulting array.

- **Immutability**: `filter()` does not modify the original array. It returns a new array containing the elements that passed the rejection criteria.

Using `filter()` to implement `reject` provides a concise and effective way to handle exclusion logic in JavaScript arrays, leveraging the functional programming paradigm for clarity and maintainability.

