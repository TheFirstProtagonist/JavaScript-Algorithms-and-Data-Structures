function getAverage(array: number[]): number {
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}


function getGrade(score: number): string {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score: number): Boolean {
  return getGrade(score) !== "F";  
}

function studentMsg(totalScores:number[], studentScore: number): string {
  let passFail;
  if (hasPassingGrade(studentScore)) {
    passFail = "The student has passed the class.";
  } else {
    passFail = "The student has failed the class.";
  }

  return `Class average: ${getAverage(totalScores).toFixed(2)}. Your grade is ${getGrade(studentScore)}. ${passFail}`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));
