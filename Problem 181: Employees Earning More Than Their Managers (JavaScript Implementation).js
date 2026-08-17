/**
 * Finds employees who earn more than their managers.
 * 
 * @param {Object[]} employees - Array of employee objects
 * @param {number} employees[].id
 * @param {string} employees[].name
 * @param {number} employees[].salary
 * @param {number|null} employees[].managerId
 * @return {string[]} - Array of employee names
 */
function findHighEarningEmployees(employees) {
    // Step 1: Create a map for O(1) lookups of any employee by their ID
    const employeeMap = new Map();
    for (const emp of employees) {
        employeeMap.set(emp.id, emp);
    }

    const highEarners = [];

    // Step 2: Iterate through to find employees earning more than their manager
    for (const emp of employees) {
        if (emp.managerId !== null && employeeMap.has(emp.managerId)) {
            const manager = employeeMap.get(emp.managerId);
            
            if (emp.salary > manager.salary) {
                highEarners.push(emp.name);
            }
        }
    }

    return highEarners;
}

// --- Test Cases ---
const employees = [
    { id: 1, name: 'Joe', salary: 70000, managerId: 3 },
    { id: 2, name: 'Henry', salary: 80000, managerId: 4 },
    { id: 3, name: 'Sam', salary: 60000, managerId: null },
    { id: 4, name: 'Max', salary: 90000, managerId: null }
];

console.log(findHighEarningEmployees(employees)); 
// Output: [ 'Joe' ] (Because Joe earns 70k and his manager Sam earns 60k)
