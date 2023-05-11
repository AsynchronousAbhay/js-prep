// let entities = {
//     1: {
//         first: "Jennifer",
//         last: "Robert",
//         mobile: "121 364 135",
//     },
//     2: {
//         first: "Jennifer",
//         last: "Robert",
//         mobile: "121 364 135",
//     },
//     3: {
//         first: "Jennifer",
//         last: "Robert",
//         mobile: "121 364 135",
//     },
//     4: {
//         first: "Jennifer",
//         last: "Robert",
//         mobile: "121 364 135",
//     },
//     5: {
//         first: "Jennifer",
//         last: "Robert",
//         mobile: "121 364 135",
//     },
// };

// objects -> object
// create -
// let obj = {}
// let obj = {
//     name: "Mehul",
//     city: "bhopal",
//     profile: "http://profile.com/mehul",
//     "old name": "Harry",
// };

// read
// console.log(obj.hasOwnProperty("name"));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(obj.name);
// console.log(obj["old name"]);

// update
// obj.name = "Hello"
// delete
// delete obj.name;

// copy
// let newobj = Object.assign({}, obj);
// let newobj = { ...obj };
// newobj.name = "Utkarsh";
// const { name, city, profile, age } = obj;
// console.log(city, age);

// traverse
// for (const key in obj) {
//     console.log(key, " -> ", obj[key]);
// }

// objects -> array
// create
// let arr = [];
let arr = [1, 2, 3, 3, 54, 56];
// console.log(Array.isArray(arr));
// let x = Array.from(Array(100)).fill("👦");
// console.log(x);
// read
// arr[positiveIndex]
// arr.at(+/-)

// update
// arr[1] = "asdas"

// delete
// delete arr[1];
// console.log(arr);

// manipulate
// MUTABLE METHODS
// push unshift -> add values
// pop shift splice -> remove value
// traverse -> foreach

// IMMUTABLE METHODS
// map, filter, reduce,
// every some
// find findIndex indexOf includes, join
// reverse replace replaceAll sort, split

// arr.forEach((data, index) => {
//     arr[index] = data * 2;
// });

// let x = arr.map((data, index) => {
//     return data * 2;
// });
// console.log(x);

// let newarr = Object.assign([], arr);
// let newarr = [...arr];
// newarr[1] = 8483;
// let [, , s, ...t] = newarr;
// console.log(s, t);
// console.log(arr);
// console.log(newarr);

// variable length parameter/argument
// function dets(name, ...skills) {
//     console.log(name, skills);
// }
// function dets(name, city = "bhopal") {
//     console.log(name, city);
// }
// dets("Hello", "sdkh");
