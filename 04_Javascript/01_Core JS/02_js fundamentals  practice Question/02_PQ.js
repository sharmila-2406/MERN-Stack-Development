// What is the difference between var, let, and const?

// Var:-Var is used to declare a variable that has function scope.
// It can be re-declared and re-assigned.
var myName = "sharmil";
console.log(myName);

// Let :- let is used to declare a block-scoped variable.
// It cannot be re-declared in the same scope, but it can be re-assigned.
let  myAge = 24;
console.log(myAge);

// Const :- const is used to declare a block-scoped constant variable.
// It cannot be re-declared or re-assigned (its value stays the same).
const myClass = "MCA";
console.log(myClass);