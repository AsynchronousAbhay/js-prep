// How do you check if two strings are anagrams of each other?

// s = "john doe";
// r = "doe john";
// if (s.length !== r.length) throw "not anagrams";
// sarr = s.split("").sort();
// rarr = r.split("").sort();
// a;
// let i = 0;
// while (i < s.length) {
//     if (sarr[i] !== rarr[i]) throw "not anagrams";
//     i++;
// }
// console.log(s, "and", r, "are anagrams");

// How do you find all the permutations of a string?
s = "hello john how are you john are you doing good john";

w = "you";
let counter = 0;
let i = 0;
while (i < s.length - (w.length - 1)) {
    let temp = s.substr(i, w.length);
    if (temp === w) {
        counter++;
    }
    i++;
}
console.log(counter);

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
