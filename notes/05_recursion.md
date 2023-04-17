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

### Things to look out for!

- no Base case or the base case is wrong
- returning the wrong thing, or forgetting to return at all
- stack overflow!

## Helper Method Recursion

- two functions
- outer function, and inner
- inner function calls itself

```js
function outer(input) {
  let outerVar = [];

  function helper(helperInput) {
    ...

    helper(helperInptput) // modified input
  }

  helper(input)
  return outerVar
}
```

- one reason this is done is to avoid resetting the outer variable to collect a result
- see [Odds for example](../algs/JsAlgs%26DSClass/Recursion/helperRecusion.ts)
- also see [Pure Recursion](../algs/JsAlgs%26DSClass/Recursion/pureRecursion.ts)
