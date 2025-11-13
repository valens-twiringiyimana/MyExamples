function longRunningOperation(callback) {
  setTimeout(callback, 300);}
    
function userClicked(){
  console.log("Button clicked, starting long operation...");
  longRunningOperation(function() {
    console.log("Long operation finished.");
  }); 
  
}
 userClicked();

