let str1 = "Hello";
let str2 = "World";

// Equal
console.log(str1 === str2); // false

// Compare strings
if (str1.localeCompare(str2, "el-GR") < 0) {
    console.log(str1 + " comes before " + str2);
} else if (str1.localeCompare(str2, "el-GR") > 0) {
    console.log(str1 + " comes after " + str2);
} else {
    console.log(str1 + " and " + str2 + " are equal");
}

// Accessing characters
console.log(str1[0]); 

// Check if a string includes a substring
if (str1.includes("ell")) {
    console.log(str1 + " includes 'ell'");
}

// Searches for a substring and returns the index of the first occurrence
console.log(str1.indexOf("lo")); // 3

// Concatenate strings
let greeting = str1 + ", " + str2 + "!";
console.log(greeting);

if (str1.toUpperCase() === str2.toUpperCase()) {
    console.log("The strings are equal when case is ignored.");
} 

// trim whitespace
let str3 = " Hello World! ";
console.log(str3.trim());       // "Hello World!"


// replace substring
let str4 = "The quick brown fox jumps over the lazy dog.";
let newStr = str4.replace("fox", "cat");
let newStr2 = str4.replace(/the/gi, "a"); 

// Traverse string
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// Enhanced for
for (const char of str1) {
    console.log(char);
}

// substring
console.log(str1.substring(1, 4)); // "ell"

// slice
console.log(str1.slice(1, 4)); // "ell"
console.log(str1.slice(-3)); // "llo"