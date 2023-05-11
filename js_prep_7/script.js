// call apply
// const user = {
//     name: "John",
//     age: 23,
//     desc: function (city) {
//         return `The name is ${this.name} and the age is ${this.age} and lives in ${city}`;
//     },
// };
// const pro = {
//     name: "Anney",
//     age: 12,
// };
// let x = user.desc.call(pro, "Bhopal");
// let y= user.desc.apply(pro, ["Bhopal"]);
// console.log(x);

// bind
// function multiply(a, b) {
//     return a * b;
// }
// let x = multiply(2, 4);
// let part1 = multiply.bind(this, 2);
// // 15years
// let part2 = part1(4);
// console.log(part2);

// find weather it's Array
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(Array.isArray(arr));
// console.log(typeof arr);

// Pass by value(immutable) and pass by reference(mutable)

// Type Coercion
// console.log(NaN == NaN);

// Dynamically(weak) Typed Language

// let x = function dets() {
//     return "Inside function";
// };
// x.city = "bhopal";
// console.log(x());
// console.log(x.city);
// console.log(typeof {});
// console.log(typeof Object);
// let x = new Function();
// console.log(x());

// Higher Order Functions

// function arith(x) {
//     return x();
// }
// function add() {
//     return 1 + 2;
// }

// function arith() {
//     return function () {
//         return 1 + 2;
//     };
// }
// console.log(arith()());

// Closures
// function grand() {
//     let grandparent = "Dada";
//     return function () {
//         let parent = "papa";
//         return function () {
//             let child = "son";
//             return `${grandparent} ${parent} ${child}`;
//         };
//     };
// }
// console.log(grand()()());

// Array and Functions are object ---- true

// pure function
// 1. same input ---> same output (Idempotence)
// 2. no side effect (out of scope no access or mutation of data)
// var z = 45;
// function sum(a, b) {
//     return a + b;
// }
// console.log(z);
// console.log(sum(2, z));

// currying
// function multiplypart1(a) {
//     return function (b) {
//         return a * b;
//     };
// }
// -----------------------------------------
// const multiplypart1 = a => b => a*b;
// let p1 = multiplypart1(2);
// let res = p1(5);
// console.log(res);
// console.log(multiplypart1(2)(5));
 
// Arity -> total number of function parameters
