function longRunningOperation(callback) {
  setTimeout(callback, 3000);}
    
function userClicked(){
  console.log("Button clicked, starting long operation...");
  longRunningOperation(function() {
    console.log("Long operation finished.");
  }); 
  
}
 userClicked();

