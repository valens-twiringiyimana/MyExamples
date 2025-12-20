let count = 0;
const counterEl = document.getElementById("counter");
//counterEl.textContent = count;
// Increase by 1
document.getElementById("increaseBtn").addEventListener("click", function(){
  count++;
counterEl.textContent = count;
});

// Decrease by 1
document.getElementById("decreaseBtn").addEventListener("click", function(){
  count--;
counterEl.textContent = count;
});

// Increase by 10
document.getElementById("increaseByTenBtn").addEventListener("click", function(){
  count =count+10;
counterEl.textContent = count;
});

// Increase by 10
document.getElementById("resetBtn").addEventListener("click", function(){
  count =0;
counterEl.textContent = count;
});
