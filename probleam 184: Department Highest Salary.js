/**
 * @param {Object[]} employee
 * @param {Object[]} department
 * @return {Object[]}
 */
var departmentHighestSalary = function(employee, department) {
    // Step 1: Find the maximum salary for each department
    const maxSalaryByDept = {};
    for (const emp of employee) {
        if (!maxSalaryByDept[emp.departmentId] || emp.salary > maxSalaryByDept[emp.departmentId]) {
            maxSalaryByDept[emp.departmentId] = emp.salary;
        }
    }

    // Step 2: Create a quick lookup map for department names
    const deptMap = {};
    for (const dept of department) {
        deptMap[dept.id] = dept.name;
    }

    // Step 3: Filter employees who match the max salary for their department
    const result = [];
    for (const emp of employee) {
        if (emp.salary === maxSalaryByDept[emp.departmentId] && deptMap[emp.departmentId]) {
            result.push({
                Department: deptMap[emp.departmentId],
                Employee: emp.name,
                Salary: emp.salary
            });
        }
    }

    return result;
};

// --- Example Usage ---
const employees = [
    { id: 1, name: 'Joe', salary: 70000, departmentId: 1 },
    { id: 2, name: 'Jim', salary: 90000, departmentId: 1 },
    { id: 3, name: 'Henry', salary: 80000, departmentId: 2 },
    { id: 4, name: 'Sam', salary: 60000, departmentId: 2 },
    { id: 5, name: 'Max', salary: 90000, departmentId: 1 }
];

const departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'Sales' }
];

console.log(departmentHighestSalary(employees, departments));
/* Output:
[
  { Department: 'IT', Employee: 'Jim', Salary: 90000 },
  { Department: 'IT', Employee: 'Max', Salary: 90000 },
  { Department: 'Sales', Employee: 'Henry', Salary: 80000 }
]
*/
