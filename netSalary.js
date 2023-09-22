// NET SALARY CALCULATOR
// This function to computes  net salary

function calculateNetSalary() {
  // Takes input values from user
  let basicSalary = parseFloat(document.getElementById("basic-salary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);
  //Computes the payee 
  let payee = Math.floor((basicSalary + benefits) * 0.25);
  //Computes NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.02);
  //Computes NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.12);
  //Computes gross salary
  let grossSalary = Math.floor(basicSalary + benefits);
  //Computes net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
  //Output net salary
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Your P.A.Y.E is ${payee}</p>
    <p>Your gross salary is ${grossSalary}</p>
    <p>Your NHIF Deduction is ${NHIFDeductions}</p>
    <p>Your NSSF Deduction is ${NSSFDeductions}</p>
    <p>Your net salary is: Ksh. ${netSalary}</p>
    `;
}
// This is an event listener to the compute button
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateNetSalary);