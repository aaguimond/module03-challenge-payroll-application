// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // The below creates the employees array
  const employeesArray = []
  // The below gives us a condition for our while statement to function
  let entry = true;
  // The below while statement gives us prompts to input employees'
  // names and salaries as long as the user would like to continue
  while (entry) {
    const firstName = prompt ("Please enter an employee's first name.")
    const lastName = prompt ("Please enter the employee's last name.")
    let salary = prompt ("Please enter the employee's salary.")
    // The below transforms the string that the user inputs for an
    // employee's salary and transforms it to a number. If the user
    // did not input a number, we transform the invalid selection to a 0
    salary = Number(salary)
      if (Number.isNaN(salary)) {
        salary = 0
      }
    // The below creates an object for each employee with each of the values
    // the user entered
    const employee = {firstName:firstName, lastName:lastName, salary:salary}
    // The below pushes each employee to our array
    employeesArray.push(employee)
    // The below lets the user choose to continue or not
    entry = confirm("Would you like to add another employee?")
}
// The below gives us our array
return employeesArray
}


// Display the average salary
function displayAverageSalary(employeesArray) {
  // The below shows how many employees are on the roster, and is used in some
  // functions below
  const numberOfEmployees = employeesArray.length;
  // The below defines the total salary variable
  let totalSalary = 0;
  // The below sums each employee's salary together to the totalSalary variable
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }
  // The below is a simple calculation of the average salary by taking the
  // total salary and dividing by the number of employees
  const averageSalary = totalSalary / numberOfEmployees;
  // The below takes the average salary, rounds anything after two decimal places,
  // and always displays two decimal places, even when an integer
  const cleanAvgSalary = (Math.round(averageSalary*100) / 100).toFixed(2);
  // The below takes the salary with decimal places and transforms it from a
  // number to a string
  avgSalaryString = cleanAvgSalary.toString()
  // The below logs the average salary string and the number of employees on
  // the roster
  console.log(`The average salary of all employees is $${avgSalaryString}.
  The number of employees on the roster is ${numberOfEmployees}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // The below creates a random index number by rounding the product of a random
  // number between 0 and 1 and the amount of employees in our array
  const randomIndex = Math.floor(Math.random()*employeesArray.length);
  // The below recalls the employee located at the index in our array
  const randomEmployee = employeesArray[randomIndex]
  // The below logs the random employee's first and last names, which are two
  // values stored at their index in the array
  console.log(`The random employee we've chosen is ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
