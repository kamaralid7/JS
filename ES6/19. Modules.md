In ES6 (ECMAScript 2015), JavaScript introduced support for modules, which are a way to organize code into reusable components. Here are some key aspects of ES6 modules:

1. **Exporting from Modules:**
   - You can export functions, variables, classes, or even entire modules using `export`.
   - Named exports: `export { functionName, variableName };`
   - Default export: `export default functionName;` or `export default class ClassName {};`

2. **Importing Modules:**
   - You can import specific exports or the default export from a module.
   - Named imports: `import { functionName, variableName } from './module';`
   - Default import: `import functionName from './module';`

3. **Module Structure:**
   - Each module has its own scope. Variables and functions are scoped to the module unless explicitly exported.
   - Circular dependencies are allowed but must be carefully managed to avoid runtime errors.

4. **Static Analysis:**
   - Module imports and exports are statically analyzable, which helps tools optimize code bundling and tree-shaking (removing unused code).

5. **Browser Support:**
   - ES6 modules are supported in modern browsers. They are loaded asynchronously and cached once fetched, enhancing performance.

6. **CommonJS vs. ES6 Modules:**
   - CommonJS (Node.js modules) are loaded synchronously and use `require()` for imports and `module.exports` for exports.
   - ES6 modules are more flexible and optimized for browser environments but require a transpiler like Babel for full compatibility with older browsers.

Example:

```javascript
// Module: utils.js
export function add(a, b) {
    return a + b;
}

// Module: main.js
import { add } from './utils.js';

console.log(add(3, 5)); // Outputs: 8
```

ES6 modules offer a more structured and maintainable way to organize JavaScript code, making it easier to build and maintain large-scale applications.

