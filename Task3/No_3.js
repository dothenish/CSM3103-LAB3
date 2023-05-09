function Employee(employeeName, employeeId, salary) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.salary = salary;
}

function Manager(managerName, branch) {
    this.managerName = managerName;
    this.branch = branch;
}

Manager.prototype = new Employee("Justin Bieber", "11111", 6000);
var myManager = new Manager("Jeremy Zucker", "Australia");

console.log("Employee Name: " + myManager.employeeName);
console.log("Employee ID: " + myManager.employeeId);
console.log("Salary: RM" + myManager.salary.toFixed(2));
console.log("Manager Name: " + myManager.managerName);
console.log("Branch: " + myManager.branch);