Event bubbling and event capturing are two different phases in the event propagation model in the Document Object Model (DOM) of web browsers. They are also sometimes referred to as event trickling:

1. **Event Capturing (Trickling)**:
   - **Description**: Event capturing is the first phase of event propagation in which the event starts from the root of the DOM hierarchy and trickles down to the target element.
   - **Usage**: Less commonly used compared to event bubbling, it can be useful for global event handling before an event reaches its target.
   - **Example**: Here's how you can listen to an event during the capturing phase:
     ```javascript
     element.addEventListener('click', function() {
         console.log('Capturing phase');
     }, true); // The third parameter 'true' specifies capturing phase
     ```

2. **Event Bubbling**:
   - **Description**: Event bubbling is the second phase of event propagation, where the event starts from the target element and bubbles up through its ancestors in the DOM hierarchy.
   - **Usage**: This is the default behavior in most cases and is used extensively in event delegation and handling where multiple elements need to react to the same event.
   - **Example**: Here's how you can listen to an event during the bubbling phase:
     ```javascript
     element.addEventListener('click', function() {
         console.log('Bubbling phase');
     });
     ```

In practical terms, understanding these phases helps in better managing event handling and delegation in complex web applications. Event bubbling tends to be more intuitive and widely used, while event capturing can be useful in specific scenarios where you want to handle events before they reach their target elements.