/**
 * @param {Object[]} employee
 * @param {Object[]} department
 * @return {Object[]}
 */
var departmentTopThreeSalaries = function(employee, department) {
    // Step 1: Create a lookup map for department names
    const deptMap = {};
    for (const dept of department) {
        deptMap[dept.id] = dept.name;
    }

    // Step 2: Collect unique salaries for each department using a Set
    const salariesByDept = {};
    for (const emp of employee) {
        if (!salariesByDept[emp.departmentId]) {
            salariesByDept[emp.departmentId] = new Set();
        }
        salariesByDept[emp.departmentId].add(emp.salary);
    }

    // Step 3: Sort the unique salaries and keep only the top 3
    const topSalariesByDept = {};
    for (const deptId in salariesByDept) {
        topSalariesByDept[deptId] = Array.from(salariesByDept[deptId])
            .sort((a, b) => b - a)
            .slice(0, 3);
    }

    // Step 4: Construct the final result by checking if the employee's salary is in the top 3
    const result = [];
    for (const emp of employee) {
        const topSalaries = topSalariesByDept[emp.departmentId];
        
        // Ensure the department exists and the salary is within the top 3 threshold
        if (topSalaries && topSalaries.includes(emp.salary) && deptMap[emp.departmentId]) {
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
    { id: 1, name: 'Joe', salary: 85000, departmentId: 1 },
    { id: 2, name: 'Henry', salary: 80000, departmentId: 2 },
    { id: 3, name: 'Sam', salary: 60000, departmentId: 2 },
    { id: 4, name: 'Max', salary: 90000, departmentId: 1 },
    { id: 5, name: 'Janet', salary: 69000, departmentId: 1 },
    { id: 6, name: 'Randy', salary: 85000, departmentId: 1 },
    { id: 7, name: 'Will', salary: 70000, departmentId: 1 }
];

const departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'Sales' }
];

console.log(departmentTopThreeSalaries(employees, departments));
/* Output:
[
  { Department: 'IT', Employee: 'Joe', Salary: 85000 },
  { Department: 'Sales', Employee: 'Henry', Salary: 80000 },
  { Department: 'Sales', Employee: 'Sam', Salary: 60000 },
  { Department: 'IT', Employee: 'Max', Salary: 90000 },
  { Department: 'IT', Employee: 'Randy', Salary: 85000 }
]
// Note: IT Department's top 3 unique salaries are 90000, 85000, and 70000. 
// Janet (69000) is excluded because she ranks 4th. Joe and Randy both tie for 2nd.
*/
