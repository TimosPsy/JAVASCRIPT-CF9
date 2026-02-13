let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum);


// Enhanced for
let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    sum += num;
}

console.log("Sum with enhanced for:", sum);