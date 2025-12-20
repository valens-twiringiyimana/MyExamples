function countCharacter(text){
  let length = text.length;
  return length;
}
const results = countCharacter("JavaScript");
//Lowercase
const txtToLowerCase = (text) => {
  let lowercase = text.toLowerCase();
  return lowercase;
};
console.log(txtToLowerCase("JAVASCRIPT"));

//uppercase
const txtToUpperCase = (text) => {
  let lowercase = text.toUpperCase();
  return lowercase;
};
console.log(txtToUpperCase("mukanziza francoise"));

// Slice

const slicedTxt=function(txt,start,end){
  let sliced=txt.slice(start,end);
  return sliced;
  };
  console.log(slicedTxt("Valens",0,3));