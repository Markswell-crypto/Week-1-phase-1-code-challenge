# Week-1-phase-1-code-challenge
A code challenge to create three JavaScript programs... Student Grade Generator, Speed Detector and Net Salary Calculator.

##  Toy problems Prerequisites

### Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 #### Solution
The function uses the if-else statement to choose the student's grade based on the input marks.
The grade is displayed in the #grade paragraph element using the textContent property.

        function gradingSystem()

Takes input values from user and checks through the various If else statement to see if a condition is met. If at least one condition is met, the grade is displayed as output.

### Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 #### Solution
The function 

        function speedCalculator()  

Takes the speed the user inputs in km/hr.

The speed is passed as an integer value and given a variable called speed

        let speed;
  
        function speedCalculator() 


The First if statememtchecks if the speed is less than 70 and then displays the results if condition is met.
    
    if (speed < 70) {
    console.log('Ok');
    } 

1 point is recieved for every 5 km/h over the speed limit set as 70 km/h. If the points exceed 12 your License is suspended

### Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

#### Solution
This function 

        function calculateNetSalary()

Computes  the net salary by accepting the basic salary and benefits;
Then Computes the payee, NHIF deductions, NSSF deductions and the gross salary
 The net salary is achieved by 
 
        let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
