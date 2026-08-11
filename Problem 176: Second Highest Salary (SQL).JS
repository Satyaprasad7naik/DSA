/**
 * @param {Object[]} employee - Array of employee objects, e.g., [{id: 1, salary: 100}, {id: 2, salary: 200}]
 * @return {number | null}
 */
var secondHighestSalary = function(employee) {
    // 1. Extract just the salaries from the array of objects
    const salaries = employee.map(e => e.salary);
    
    // 2. Remove any duplicate salaries using a Set
    const uniqueSalaries = [...new Set(salaries)];
    
    // 3. Sort the unique salaries in descending order
    uniqueSalaries.sort((a, b) => b - a);
    
    // 4. Return the second element if it exists, otherwise return null
    if (uniqueSalaries.length >= 2) {
        return uniqueSalaries[1];
    } else {
        return null;
    }
};

// --- Example Usage ---
// const employees1 = [{ id: 1, salary: 100 }, { id: 2, salary: 200 }, { id: 3, salary: 300 }];
// console.log(secondHighestSalary(employees1)); // Output: 200

// const employees2 = [{ id: 1, salary: 100 }];
// console.log(secondHighestSalary(employees2)); // Output: null

// const employees3 = [{ id: 1, salary: 100 }, { id: 2, salary: 100 }];
// console.log(secondHighestSalary(employees3)); // Output: null
