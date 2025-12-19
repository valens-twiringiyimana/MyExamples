function studentGradingSystem(totalMarks, obtainedMark, classAverage) {
  let passingCriteria = totalMarks*0.5;
  let exceptionCriteria = totalMarks*0.8;
  
  let hasPassed = obtainedMark >= passingCriteria;
  let hasPerformedExceptionally = obtainedMark >= exceptionCriteria;
  let isAboveAverage = obtainedMark > classAverage;
  
  return {
    hasPassed,
    hasPerformedExceptionally,
    isAboveAverage,
  };
}
const results = (studentGradingSystem(500, 410, 350));

