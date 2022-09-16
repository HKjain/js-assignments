//Q2 - Write a function using switch case to find the grade of a student based on marks obtained
function checkGrade(marks) {
  if (marks > 100 || marks < 0) return "Invalid Marks!";
  let grade;
  switch (parseInt(marks / 10)) {
    case 10:
    case 9:
      grade = "S grade";
      break;
    case 8:
      grade = "A grade";
      break;
    case 7:
      grade = "B grade";
      break;
    case 6:
      grade = "C grade";
      break;
    case 5:
      grade = "D grade";
      break;
    case 4:
      grade = "E grade";
      break;
    default:
      grade = "Student has failed!";
      break;
  }
  return grade;
}

console.log(checkGrade(95));
console.log(checkGrade(65));
console.log(checkGrade(85));
console.log(checkGrade(75));
console.log(checkGrade(45));
