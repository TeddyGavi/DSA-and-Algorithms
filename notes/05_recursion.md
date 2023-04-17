# Recursion

- iterative versus recursive
- iterative is typical solution
- a different way of thinking about solutions to problems

### What is recursion?

- a process that calls itself
- in coding, this is a function that calls itself
- must be some ending case, the base case!

### Why?

- recursion is everywhere!
- JSON.parse / JSON.stringify are recursive
- document.getElementById and DOM traversal algorithms are recursive!
- Object traversal
- sometimes a cleaner alternative to iteration

### ...functions?

- there is a special order that functions happens in, there is a built in data structure called the "call stack"
- when a function is invoked its placed on the top the of call stack
- when the return keyword is seen the function ends and the compiler will remove the function from the top
- recursion keeps pushing new functions over and over onto the call stack and waits to resolve
- where does it end? Base case!

### two essential parts

- base case
- different inputs
