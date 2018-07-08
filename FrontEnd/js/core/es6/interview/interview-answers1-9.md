1. 
let keyword introduced in ES6. It mainly provides a way to declare and use variables in block-scope. 
The var keyword is function scoped. meaning a variable declared using the var keyword is scoped to the entire 
function in which it was declared.How let is different than var is best explained by examples.
access a variable before it is declared:
Possible:

console.log(y);

var y = 5; //undefined.

The variable `y` is hoisted and set to undefined and can be accessed by the log() call.

Not Possible:

console.log(y);

let y = 5; //error - y is not defined.
 

The variable y is declared using let. It is only accessible to code that is 'below' it scope-wise.

Block scope vs. function scope:
We change the var keyword to let.

 

let x = 1984;
(function(){
    if (false) {
        let x = 1948; //scoped declaration
    }
    console.log(x); //1984
}());

 

Now the let inside the IF statement will not be scoped to the IIFE so when the log() invocation is run, the 'x' available 
is the one declared outside the IIFE. The x declaration inside the IF statement is block-scoped and 
will not effect outer scopes.


2.
Using the Set() object. Here is an example of an array with duplicates and the use of Array.from() to return data 
as an array since Set()'s instance is an object.

const array = [1, 4, 99, 3, 1, 4, 15];

const noDups = Array.from(new Set(array));

console.log(noDups); //[1, 4, 99, 3, 15]

3.
`Symbol` is a new primitive type introduced in ES6.

let mySymbol = Symbol();

typeof mySymbol; // 'symbol'
 

A Symbol is created by the factory function `Symbol()`. The factory function can be passed an argument that serves as a description, mainly for debugging purposes.


 

let mySymbol = Symbol();

let mySymbol2 = Symbol('mySymbol');
 

 There is no constructor function for Symbol, and trying to instantiate one will throw an error.

let sym = new Symbol(); //Uncaught TypeError: Symbol is not a constructor
 

Each Symbol has a unique ID and will not clash with other Symbols, even if passed the same description. 

 

let s1 = Symbol();
let s2 = Symbol();
let s3 = Symbol('description');
let s4 = Symbol('description');

s1 === s2; //false
s3 === s4; //false
 

Since Symbols have a unique ID and will not clash with other Symbols, one good use it property keys and method definitions.

let mySymKey = Symbol();
let mySymMethod = Symbol();

let object = {

    [mySymKey]: "value",
    [mySymMethod]() {
       return "some actions";
    } 

}

console.log(object[mySymKey]); //"value"
console.log(object[mySymMethod]()) //"some actions"
Coercing a Symbol to string will throw an error:

let sym = Symbol("string");

let string = "some string";

let newString = string + sym; //Uncaught TypeError: Cannot convert a Symbol value to a string
Either use String factory or the toString() method.

 

    let newString = string + sym.toString();

    let newString = string + String(sym);

4. 
This is best explained by an example. Consider the following object. Some of its properties are string named properties, some are symbols and some are functions. 

let sym = Symbol('myKey');
let obj = {

    [sym]: "I am the value of the symbol key",
    a: 4,
    method() {
        return 99;
    }

}

console.log(obj); //{a: 4, Symbol(myKey): "I am the value of the symbol key", method: ƒ}
The methods are 2 ways of returning the property names (the keys) of the object. `getOwnPropertyNames()` will return an array of the properties without the symbols. `getOwnPropertySymbols()` will return the symbol properties.
Using the same object we created in the previous code example:

Object.getOwnPropertyNames(obj)
// ["a", "method"]

Object.getOwnPropertySymbols(obj)
// [Symbol(myKey)]

5.
Arrow functions are an improvement comparing to ES5 and prior, first because they are less verbose. You code less when using them. A second reason is the arrow function uses the 'this' of its lexical content. Losing the 'this' is a common scenario if you developed in ES5 and previous versions before. Though there are patterns to overcome it, ES6 offers 'off the shelve' solution.

Now let's see code examples of the arrow function in action.

A function that returns a function.
prior to ES6, no arrow function:

var myObj = {

    run: function() {
        return function() {
            console.log(this);
        }
    }

}

myObj.run()(); //it will log the window object and not myObj context.

A common pattern to keep the reference to `myObj` context is to use `var self = this` in the desired context and keeping it available in the scope.

var myObj = {

    run: function() {
       
        var self = this;       
 
        return function() {
            console.log(self);
        }
    }

}

myObj.run()(); //it will log the myObj object, we kept the 'this' reference to the object.

ES6, arrow function:

We can skip the `var self = this;` and just return an arrow function. The latter will keep the reference to the desired 'this'.

var myObj = {

    run: function() {
        
        return () =>  //notice the syntax. 
            console.log(this);
    }

}

myObj.run()(); //it will log the window object and not myObj context.

This example might not be 100% real life case but I hope it helped understand the point.

 

Strict mode and forcing 'this'.
In strict mode, for example, If you were to declare a function and not define it's 'this', 
the JavaScript engine will not force it to be the window object and it will be set to undefined. Let's see an example:

prior to ES6, no arrow function:

'use strict';

   var functionProperty = function(){
        console.log(this);
    }

functionProperty(); //undefined

If we would declare the function as an arrow function, the 'this' reference will be kept 
(to the window object in this specific case) with no need to pass it. See the following code example:

ES6, arrow function:

'use strict'

   var functionProperty = () => { //notice the syntax
        console.log(this);
    }

functionProperty(); // {Window}
There are more examples for when arrow functions are a more suitable solution than 'regular' 
JavaScript functions, experiment with it and learn new powerful tool you can use.

6.
Old way
var old = [1,2,3,4,5];
var oldAppend = [6,7,8,9];

var old = old.apply(old, oldAppend);

var new = [...old, ...oldAppend];

We can use Javascript's `apply()` to pass an array to a function that requires one or more separate arguments. 
 Explain how can we use the spread operator instead of `apply()`.

Answer:

console.log(Math.min(...[4,8,5])); //4 

The spread operator will spread the array to single separated values and those can be passed to methods such as 
`Math.min()`.

7. 
Nothing, a `TypeError: Assignment to a constant variable.` an error will be thrown. Since we used the keyword `const` to declare our variable, 
or constant in other words, we can not re-assign another value to it. Be careful, The name may be a little misleading since in other cases what was declared with the `const` keyword, is mutable or parts of it are. 

8. 
The values will be `5` and `7` respectively. 

This is called "destructing assignment" and what it does is using the values from the array to set the two separate variables declared. 
This can be very useful in some cases. I recommend reading more about it: MDN - Destructuring assignment.

9.
An error will be thrown. 

Uncaught TypeError: object is not iterable

Not all objects in JavaScript are iterable. Array and Map are examples of iterable objects (or types).

I recommend reading the following The iterable protocol page for more information. 