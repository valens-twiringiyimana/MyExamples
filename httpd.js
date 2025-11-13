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