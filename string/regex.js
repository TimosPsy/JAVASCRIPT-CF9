// regex with test
let pattern = /cat/i; // Case-insensitive regex to match "hello"
let str = "The Cat is on the roof.";

if (pattern.test(str)) {
    console.log("The string contains 'cat' (case-insensitive).");
} else {
    console.log("The string does not contain 'cat'."); 
}


// match with regex
let pattern2 = /cat/gi; // Global and case-insensitive regex to match "cat"
const str2 = "I have a cat. The cat is cute.";
const matches = str2.match(pattern2);   // ["cat", "cat"]