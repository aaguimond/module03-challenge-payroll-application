// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = []
  let entry = true;

  while (entry) {
    const firstName = prompt ("Please enter an employee's first name.")
    const lastName = prompt ("Please enter the employee's last name.")
    let salary = prompt ("Please enter the employee's salary.")
    
    salary = Number(salary)
      if (Number.isNaN(salary)) {
        salary = 0
      }

    const employee = {firstName:firstName, lastName:lastName, salary:salary}

    employeesArray.push(employee)

    entry = confirm("Would you like to add another employee?")
    console.log(employeesArray)
}
return employeesArray
}


// Display the average salary
function displayAverageSalary(employeesArray) {
  // TODO: Calculate and display the average salary
  const numberOfEmployees = employeesArray.length;

  let totalSalary = 0;
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }
  const averageSalary = totalSalary / numberOfEmployees;
  const cleanTotalSalary = Math.round(averageSalary*100) / 100;

  console.log(`The average salary of all employees is $${cleanTotalSalary}.
  The number of employees on the roster is ${numberOfEmployees}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {


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
