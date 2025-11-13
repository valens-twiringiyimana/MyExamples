let string="Hello, World!";
let str3="I do not love you please leave me alone.";
let mama= `Dear friend, ${string} and  ${str3} `;

console.log(mama);
console.log( `Hello, ${str3} and ${mama}` );

let isAGirl=true;
let age=20;
if (isAGirl && age >=18) {
    console.log("She is eligible for scholarship.");

} else {
    console.log("She is not eligible for scholarship.");
}
let Age=17;
Age=undefined;  //reassigning Age variable to undefined this means Age variable has no value now. As it changes from integer to undefined.
console.log(Age);
console.log('Data type is', typeof Age); // it will return undefined as type of Age variable.
console.log('Data type is', typeof isAGirl); // it will return boolean as type of isAGirl variable.
console.log('Data type is', typeof Math); // it will return string as type of string variable.
console.log('Data type is', typeof Symbol("id")); // it will return symbol as type of Symbol("id").
console.log('Data type is', typeof BigInt(9007199254741991)); // it will return bigint as type of BigInt(9007199254741991).

//===============================================================================================================================================
//let age1= prompt(`What is your age?`,100); //this line will work in browser environment only not in node.js environment.
let age1=25; // hardcoded value for demonstration
console.log(`You are ${age1} years old!`);

let valens=["Mangos", "Apples", "Lemons"];
console.log(valens);

valens.push("Grapes"); // adding an element to the end of the array
valens.unshift("Bananas"); // adding an element to the beginning of the array
console.log(valens);
