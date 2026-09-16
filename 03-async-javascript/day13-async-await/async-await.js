// async / await in javacscript



/*it is a replacement of a promise.
It makes the code look more cleaner and easy to understand.
It is built on top of promises.
modern way of handling asynchronous operations in javascript.

Theory: async / await (concise)
- async keyword is used to declare a function as asynchronous
- async function always returns a promise.
- await keyword is used to wait for a promise to resolve or reject.
- await can only be used inside an async function.
Example:
async function greet(){
  return "Hello";
  }

greet().then((val) => {
  console.log(val); // "Hello"
}  

we use the try catch block to handle errors in async await

async advantages:
- makes asynchronous code look and behave a little more like synchronous code.
- reduces syntax of of promise.

await advantages:
- makes code easier to read and maintain.
- applies only to async functions.
- pauses the execution of the async function and waits for the promise to resolve or reject.

*/
// JSON: javascript object notation
/*

json is a lightweight data interchange format that is easy for humans to read and write,
 and easy for machines to parse and generate.
It is commonly used for transmitting data in web applications between a server and a client.

key characteristics:-
- text-based format(not binary)
- language independent(works with most programming languages)
- hierarchical structure (supports nested data structures)
- supports various data types(strings, numbers, booleans, arrays, objects)
- supports nested data structures
- self-describing format (easy to understand)


/*Example of JSON object:-
const person = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

difference b/w normal object and json object:-
1. In a normal object, keys can be unquoted if they are valid identifiers, whereas in JSON, keys must always be double-quoted strings.
2. In a normal object, single quotes can be used for strings, whereas in JSON, only double quotes are allowed for strings.
3. Normal objects can contain functions and undefined values, whereas JSON does not support functions or undefined values.
4. Normal objects can have trailing commas after the last key-value pair, whereas JSON does not allow trailing commas.
5. string literal in normal object can use backticks (` `) for template literals, whereas JSON only allows double quotes for strings.
6.  Normal objects can have properties with special characters in their keys without quotes, whereas in JSON, keys with special characters must be double-quoted strings.
7. literals important in json and not important in normal object
8. we cannot use comments in json but we can use comments in normal object.
~

json.parse:- used to convert a JSON string into a javascript object.

example:-
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // "John"

*/


// async function greet(){
//   return "Hello";
//   }

// greet().then((val) => {
//   console.log(val);
// }  );

// parse:- used to convert a JSON string into a javascript object
const obj1 = '{"name": "John", "age": 30, "city": "New York"}';
const output1 = JSON.parse(obj1);
console.log(output1.age);



// stringify:- used to convert a javascript object into a JSON string.
const obj = {"name": "John", "age": 30, "city": "New York"}

const output = JSON.stringify(obj);
console.log(output);


/* fetch api:- it is used to make network requests to retrieve resources from a server.
 it returns a promise that resolves to the response of the request.
 stores the data 
fetch('https://jsonplaceholder.typicode.com/posts/1') 
 */

fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
  const data = res.json();
  console.log(data);

})

// async await with fetch api
