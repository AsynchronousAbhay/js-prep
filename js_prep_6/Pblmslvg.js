// How do you print duplicate characters from a string?
let str = prompt("Enter String");

let i = 0;
let collection = {};
while (i < str.length) {
    if (collection[str[i]]) {
        collection[str[i]] += 1;
    } else {
        collection[str[i]] = 1;
    }
    i++;
}
delete collection[" "];
for (const key in collection) {
    if (collection[key] > 1) {
        console.log(key, "-> ", collection[key]);
    }
}

// How do you reverse a given string in place?
// let str = prompt("Enter String ").split("");
// console.log(str.join(""));
// let s = 0;
// let e = str.length - 1;
// while (s < e) {
//     // console.log(str[s], " ", str[e]);
//     let temp = str[s];
//     str[s] = str[e];
//     str[e] = temp;
//     str[s].replace(str[e]);
//     str[e].replace(temp);
//     s++;
//     e--;
// }
// console.log(str.join(""));

// How do you check if two strings are anagrams of each other?

// How do you find all the permutations of a string?
// How can a given string be reversed using recursion?
// How do you check if a string contains only digits?
// How do you find duplicate characters in a given string?
// How do you count a number of vowels and consonants in a given string?
// How do you count the occurrence of a given character in a string?
// How do you print the first non-repeated character from a string?
// How do you convert a given String into int like the atoi()?
// How do you reverse words in a given sentence without using any library method?
// How do you check if two strings are a rotation of each other?
// How do you check if a given string is a palindrome?
// How do you find the length of the longest substring without repeating characters?
// Given string str, - How do you find the longest palindromic substring in str?
// How to remove the duplicate character from String?
// How to find the maximum occurring character in given String?
// How do you remove a given character from String?
