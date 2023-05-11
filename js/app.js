let s = "abhay"
// let b = s.charAt(-2)
// let c = s.at(-4)
let l = "abh"
let e = s.localeCompare(l);
let p = e
// console.log(s);
// console.log(e);
// console.log(p);


// reverse the string.....
function strRev(str) {
    const arrStr = str.split("")

    const ArrRev = arrStr.reverse();
    console.log(ArrRev);

    let ArrJoin = ArrRev.join("");
    // console.log(ArrJoin)

    return ArrJoin;

}

// const string = prompt("enter any thing!")

// let result = strRev(string)
// console.log(result) 


// charCodeAt and CodPointAt

let q = "Hitesh";
// let res = q.charCodeAt(5);

// let res = q.codePointAt(0);

// let res = q.match('esh');


var num = 213;
// console.log("Output : " + num.toString(2));

// console.log(res);

// ---------------------------------------------


// dets();
// function dets() {
//     console.log("Function Called");
// }

// console.log(a);
var a = 12;

// x()
// var x = function() {
//     console.log("hello");
// };
// console.log(typeof x);

x = (function () {
    console.log("hello");
})();
// console.log(x);

// lexical environment

function name(params) {
    var k = "abhay";
}

// console.log(k);

// console.log(c);
let c = 0;

let obj = {
    name: "abhay",
    age: 34,
    dets: function dets(hometown, country) {
        console.log(`name : ${this.name}, age : ${this.age}, hometown: ${hometown}, country: ${country} `);
    }
}

// obj.dets()

let obj2 = {
    name: "ankit",
    age: 22,
}

// obj.dets.call(obj2, "mumbai", "india")
// obj.dets.apply(obj2, ["mumbai", "india"])

// obj2.dets()

// bind
let userDets = obj.dets.bind(obj2, ["bhopal", "india"]);
// console.log(userDets);
// userDets()


let arr = [1, 3, 46, 6, 7, 88, 2];

// console.log(typeof arr);
// console.log(Array.isArray(arr));


// let obj = {}
let objt = {
    name: "Mehul",
    city: "bhopal",
    profile: "http://profile.com/mehul",
    "old name": "Harry",
};

// READ
// console.log(objt.hasOwnProperty('name'));  //otp: boolean
// console.log(Object.keys(objt)); 
// console.log(Object.values(objt));
// console.log(objt.name); 
// console.log(objt['city']); 

let newObj = Object.assign({}, objt);
// let newObj = {...objt}
// console.log(newObj);

// for (const key in objt) {
//     console.log(`${key} --> ${objt[key]}`);
// }


let newArr = [2, 35, 12, 6, 7, 1, 8];

// let changeArr = newArr.pop(); 
// let changeArr = newArr.unshift(12,32,33);
// let changeArr = newArr.push(2,4,6); 
// let changeArr = newArr.shift(); 
// let changeArr = newArr.splice(1,3) 
// let changeArr = newArr.slice(1,3) 
// console.log(newArr);
// console.log(changeArr);

const checkeven = (value) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            value % 2 === 0 ? resolve("even") : reject('odd')
        }, 5000)
    });

// checkeven(1).then((res) => {
//     console.log(res);
// }).catch((err) => console.log(err));

async function run() {
    try {
        const res = await checkeven(2)
        console.log(res);
        //    throw new Error('mai chelga sala!');
    } catch (error) {
        console.log(error);
    } finally {
        console.log("always runs");
    }
}

// run()

// HOC function...
function Name(params) {
    console.log("hello", params);
}

// Name(function() {})

function arith() {
    return function () {
        return 1 + 2;
    };
}
// console.log(arith()());

// colusers

function Gen() {
    let grandFather = "dada";
    return function () {
        let father = "papa";
        return function () {
            let child = "baita";
            console.log(`grandfather: ${grandFather}, father: ${father}, child: ${child}
            `);
        }
    }
}

// Gen()()()

// currying with bind method
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2)
// multiplyByTwo(5)

// let multiplyByThree = multiply.bind(this, 3, 4);
// multiplyByThree(10)

// clousers currying
let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
};

// multiply(2)(4)

// let multiplyByTwo = multiply(2)
// multiplyByTwo(5)

let multiplyByThree = multiply(3, 4);
multiplyByThree(10)