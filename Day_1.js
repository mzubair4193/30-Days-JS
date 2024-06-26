/*
2667. Create Hello World Function
Easy
Companies
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10
*/

// const createHelloWorld = function() {
//     return function(...args){
//         return "Hello World";
//     }
// }

// const a = createHelloWorld()

// add(1,2)

// function add(a,b){
//     console.log(a + b);
// }

// const add = (a,b) => {
//     return a + b;
// }

!!**Correct Answer**!!

var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
}

