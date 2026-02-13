const EXHANGE_RATE = 1.123; // Example exchange rate from USD to EUR
let euros = 50; // Amount in Euros
let dollars = 0;
let roundedDollars = 0;

// Convert Euros to Dollars
dollars = euros * EXHANGE_RATE;
roundedDollars = Math.round(dollars * 100) / 100; // Round to 2 decimal places


// Output the result
console.log(euros + " Euros is equal to " + dollars.toFixed(2) + " Dollars");
console.log(euros + " Euros is equal to " + roundedDollars.toFixed(2) + " Dollars (rounded)");