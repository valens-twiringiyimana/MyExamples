//Montly Income 
let montlyIncome=3000;
let rent=1200;
let groceries=600;
let utlities=300;
let entertainment=200;


//Total expenses

let totalExpenses=rent+groceries+utlities+entertainment;

let montlySavings=montlyIncome-totalExpenses;

alert("Your montly savings are: $"+montlySavings);
console.log("Total Expenses: $"+totalExpenses);


let percentageSavings=(montlySavings/montlyIncome)*100;
alert("You save "+percentageSavings.toFixed(2)+"% of your income each month.");

