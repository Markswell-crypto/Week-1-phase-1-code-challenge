// GRADING SYSTEM
//The function uses the if-else statement to choose the student's grade based on the input marks.
// The grade is displayed in the #grade paragraph element using the textContent property.
let marks;
function gradingSystem(marks) {
// Takes input values from user
// If else statement
    if (marks >= 80 && marks <= 100) {
      console.log("A");
    } else if (marks >= 60 && marks < 80) {
      console.log("B");
    } else if (marks >= 50 && marks < 60) {
      console.log("C");
    } else if (marks >= 40 && marks < 50) {
      console.log("D");
    } else if (marks >=0 && marks < 40) {
      console.log("E");
    } else {
      console.log("Invalid Grade")
    }
  }