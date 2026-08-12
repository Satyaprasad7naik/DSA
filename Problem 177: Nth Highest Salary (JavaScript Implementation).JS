/**
 * @param {Object[]} employee - Array of objects, e.g., [{ id: 1, salary: 100 }]
 * @param {number} n - The target rank
 * @return {number|null}
 */
function getNthHighestSalary(employee, n) {
    // 1. Extract all salaries and remove duplicates using a Set
    const uniqueSalaries = [...new Set(employee.map(emp => emp.salary))];
    
    // 2. Sort the salaries in descending order
    uniqueSalaries.sort((a, b) => b - a);
    
    // 3. Return the Nth highest salary (arrays are 0-indexed, so we use n - 1)
    // If n is out of bounds, return null
    if (n > 0 && n <= uniqueSalaries.length) {
        return uniqueSalaries[n - 1];
    } else {
        return null;
    }
}

// --- Test Cases ---
const employees = [
    { id: 1, salary: 100 },
    { id: 2, salary: 200 },
    { id: 3, salary: 300 }
];

console.log(getNthHighestSalary(employees, 2)); // Output: 200
console.log(getNthHighestSalary(employees, 4)); // Output: null

// Test case with duplicates
const employeesWithDupes = [
    { id: 1, salary: 100 },
    { id: 2, salary: 200 },
    { id: 3, salary: 200 } // Duplicate salary
];
console.log(getNthHighestSalary(employeesWithDupes, 2)); // Output: 100
