1. Explain the `let` keyword, give an example of why it is fundamentally different than the `var` keyword.

2. Suggest one simple way for removing duplicates from an array.

3. Explain ES6 `Symbol()`. Provide one use case and explain how can a `Symbol()` be coerced to `String`.
The subject is a must know question for an ES6 interview.

4. Explain the Object related methods getOwnPropertyNames() and getOwnPropertySymbols(). ES6 introduced Symbol(), a new primitive type. 
`Symbol()` can also be used as an object property keys. 

5. Why arrow functions are different than "regular" JavaScript functions? ES6 suggests an improved way of doing that using arrow functions. 
Explain why arrow functions are different an give a code example for keeping the 'this' reference 
using an arrow function.

6. How can we use the ES6 spread operator instead of `apply()`? We can use Javascript's `apply()` 
to pass an array to a function that requires one or more separate arguments.  
Explain how can we use the spread operator instead of `apply()`.

7. `const` declaration of a string

What will be logged to the console?

const x = "some string";

x = "other string";

console.log(x);

8. Explain Destructuring assignment - What will be the values of the variables?
What will be the value of `a` and `b`?

const array = [5, 7, 20];

let [a, b] = array;

9. 
ES6 introduced the for...of loop. 

Here is a use case:

let array = [1, 2, 3, 4, 5];

for (a of array) {

    console.log(a);

}

//1
//2
//3
//4
//5
What if I ran for...of on an object, what would be the outcome? 

If you think it will not work, explain why.

Here is the question code example:

let object = {

    a: "1",
    b: "2",
    c: "3",
    d: "4"

}

for (a of object) {

    console.log(a);

}
 