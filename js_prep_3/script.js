// call and apply

let obj = {
    name: "abhay",
    age: 24,
    desc: function desc(city, id) {
        return `name is ${this.name} age is ${this.age} lives in ${city} id is ${id}`;
    }
}

// obj.desc();

let obj2 = {
    name: "akash",
    age: 22
};

// let x = obj.desc.call(obj2, "bhopal", "ka2d82");
// let l = obj.desc.apply(obj2, ["bhopal", "ka2d82"]);

obj2.desc = obj.desc.call(obj2, "bhopal", "ka2d82");

// console.log(obj2);
// console.log(x);
// console.log(l);

// bind

function multiply(a, b) {
    return a * b;
}

// let x = multiply(2,4);
// console.log(x);
let part1 = multiply.bind(this, 2);
// console.log(part1);
let part2 = part1(4)
// console.log(part2);

// find whether its array or not?
let arr = [1, 34, 6, 68, 0];
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// Pass by value(immutable) and pass by reference(mutable)

// Type Coercion
// console.log(NaN === NaN);

// Dynamically(weak) Typed Language

