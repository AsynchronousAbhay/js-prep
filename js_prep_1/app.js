// let s = "hello";
// s[3] = 56;
// console.log(s);

// /------------------

// let s = "";
// console.log(s);

// --------------------

let s = "";
// console.log(s && "heloo");
// console.log(s ? "hello" : "" );

// console.log(s || "hello");

// console.log(s ?? "hello");
// console.log(0 ?? "hello");
// console.log(null ?? "hello");
// console.log(undefined ?? "hello");
// console.log("sda" ?? "hy");


// ----------------------------
// function intro() {
//     console.log(arguments);
//     console.log(this);
// }
// intro();

// -----------------------------
// let intro = () => {
//     // console.log(arguments);
//     console.log(this);
// };
// intro();

// diff - expression and statement

// {} - statement
// () - expression

// if (true) return "hlo";
// else return "hii";

// const a = [1, 23, 4].map((s) => s * 2);
// console.log(a);

// String -- methods

let str = "hello";

// charat - at:--
// console.log(str.charAt(2));
let a = str.at(-1)
console.log(a);

//concat:--- 
// console.log(str.concat(" ","world"));

//startswith -- true/false:--
// console.log(str.startsWith("h"));

//endsswith -- true/false:--
// console.log(str.endsWith("o"));

// includes -- true/false:---
// console.log(str.includes("l"));

// indexof:---
// console.log(str.indexOf("e"));

// lastindexof:---
// console.log(str.lastIndexOf("l"));

// padstart:-
// console.log(str.padStart(8,"m"));

// padend:-
// console.log(str.padEnd(6,"m"));

// repeat:-
// console.log(str.repeat(5));

// replace:-
// console.log(str.replace("llo", "y"));

// search:-
// console.log(str.search("l"));

// slice:-
// console.log(str.slice(1));

// split:-
// console.log(str.split(""));

// substring:-
// console.log(str.substring(5,4));

// tolowercase/touppercase:-
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// trim/trimstart/trimend:-
let t = " abhay "
console.log(t);
// console.log(t.trim());
// console.log(t.trimStart());
// console.log(t.trimEnd());


// str.charCodeAt
// str.codePointAt
// str.localeCompare
// match
// str.matchAll
// str.normalize
// str.toLocaleLowerCase
// str.toLocaleUpperCase
// str.toString
// str.valueOf




// var m = [1,2,3,4,5 ];

// console.log(m.);

let m = "abhay";
// console.log(m.charAt(2));
let n = "hello"
// console.log(n.at(-3));
console.log(n.localeCompare(m));