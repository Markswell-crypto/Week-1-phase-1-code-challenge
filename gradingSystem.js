// GRADING SYSTEM
//The function uses the if-else statement to choose the student's grade based on the input marks.
// The grade is displayed in the #grade paragraph element using the textContent property.
function gradingSystem() {
      // Takes input values from user
    const marks = parseInt(document.getElementById("marks").value);
    let grade;
// If else statement
    if (marks >= 80 && marks <= 100) {
      grade = "A";
    } else if (marks >= 60 && marks < 80) {
      grade = "B";
    } else if (marks >= 50 && marks < 60) {
      grade = "C";
    } else if (marks >= 40 && marks < 50) {
      grade = "D";
    } else if (marks >=0 && marks < 40) {
      grade = "E";
    }
      else {
      grade = "Invalid Grade"
    }

    document.getElementById("grade").textContent = `Grade: ${grade}`;
  }