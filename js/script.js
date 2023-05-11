// let a  = "abhay"
// let b = a;

// b = "hitesh"
// console.log(a);
// console.log(b);

let arr1 = [1, 13, 56, 7, 64];
let arr2 = arr1;

arr2[2] = "abhay";

// spread opt
// arr2 = [...arr1, 99,90]

// console.log(arr1);
// console.log(arr2);

let s = "";
// console.log(s);

// nullish coalescing operator....

// console.log(s ?? "hello");
// console.log(0 ?? "helo");
// console.log(false ?? "helo");
// console.log("" ?? "helo");
// console.log(NaN ?? "helo");

const foo = "FOO";

// console.log(null || foo);
// console.log(null || undefined ?? foo); --->// syntax error

// provide precedence...
// console.log("" || undefined);  //---output- RHS
// console.log(0 || undefined);    //output -RHS
// console.log((null || "hello") ?? foo);
// console.log((null || undefined) ?? foo);
// console.log("hi" ?? "helo");


// EXAMPLES::::

const nullValue = null;
const emptyValue = ""; //falsy
const someNumber = 42;

const valA = nullValue ?? "Value of A";
const valB = emptyValue ?? "Value of B"; //output:""
const valC = someNumber ?? "0";

// console.log(valA);
// console.log(valB);
// console.log(valC);

let f1;
// console.log(f1 || "hello");

const count = 0;
const text = "";

// console.log(count || "76");
// console.log(text || "hii!");


// short circuiting

function A() {
    console.log("A was called!");
    return undefined;
}

function B() {
    console.log("B was called!");
    return false;
}

function C() {
    console.log("C was called!");
    return "foo";
}

// console.log(A() ?? C());
// output: 
//-1- A was called!
//-2- C was called! 
//-3- foo

// console.log(B() ?? C());
// Logs "B was called" then "false"
// as B() returned false (and not null or undefined),
// the right hand side expression was not evaluated


// Chaining Operator

const obj = {
    someObjProps: 'Hi'
};

// const resObj = obj.someObjProps.toUpperCase() ?? "not available!" ;
const resObj = obj.someObjProps?.toUpperCase() ?? "not available!";
// console.log(resObj);

const resObj2 = obj.someObjProps2?.toUpperCase() ?? "not available!";
// console.log(resObj2);


// ternery operator::::---

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}

// console.log(getFee(true));
// Expected output: "$2.00"

// console.log(getFee(false));
// Expected output: "$10.00"

// console.log(getFee(null));
  // Expected output: "$10.00"


// functions::::
// function intro() {
//     console.log(arguments);
//     console.log(this);
// }

// intro();

let intro = () => {
    console.log(arguments);
    console.log(this);
}

// intro()
// console.log(intro);

// expression-() VS statment-{}

const a = [1,3,4,5].map(e => e*2); //--expression
console.log(a);


// ----------------------------------------------

// String methods




