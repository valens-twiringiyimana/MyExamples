//String format

function formatString(str1,str2){
  let uppercaseStr1=str1.toUpperCase();
  let lowercaseStr2=str2.toLowerCase();
  let combined=uppercaseStr1 +" "+lowercaseStr2;
  return combined;
}
console.log(formatString("Hello","WORLD"));