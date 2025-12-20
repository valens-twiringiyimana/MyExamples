const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const titleEl = document.querySelector(".title");
const bodyEl = document.querySelector("body");
const resetBtn = document.querySelector(".reset");

btn1El.addEventListener('click',function(){
bodyEl.style.backgroundColor="Yellow";
});
btn2El.addEventListener('click',()=>{
  titleEl.style.fontSize = "90px";
});

resetBtn.addEventListener('click',()=>{
  bodyEl.style.backgroundColor="";
  titleEl.style.fontSize ="30px";

});