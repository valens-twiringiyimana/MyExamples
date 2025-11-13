/*function longRunningOperation(callback) {
  setTimeout(callback, 3000);}
    
function userClicked(){
  console.log("Button clicked, starting long operation...");
  longRunningOperation(function() {
    console.log("Long operation finished.");
  }); 
  
}
 userClicked();*/


 function longRunningOperation(callback) {
// simulate a 3 second operation
setTimeout(callback, 3000);
}
function webRequest(request) {
console.log('starting a long operation for request:', request.id);
longRunningOperation(function () {
console.log('ending a long operation for request:', request.id);
});
}
// simulate a web request
webRequest({ id: 1 });
// simulate a second web request
webRequest({ id: 2 });

console.time('timer');
setTimeout(function(){
console.timeEnd('timer');
},1000)

console.time('timeit');
function fibonacci(n) {
if (n < 2)
return 1;
else
return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(44); // modify this number based on your system performance
console.timeEnd('timeit'); // On my system it takes about 9000ms (i.e. 9 seconds)
