const calculateBMI = (weight,height) => {
  let bmi = weight/(height*height);
  let status;
  if(bmi<18.5){
    status= 'Underweight';
  } else if(bmi<24.9){
     status ='Normal Weight';
  } else if(bmi<29.9){
    status ='Overweight';
  } else {
    status ='Obese';
  }  
  return status;
};
const bmiResults = calculateBMI(68, 1.75);