/**
 * Problem 196: Delete Duplicate Emails
 * Simulates deleting duplicate emails and keeping the one with the smallest id.
 */

function deleteDuplicateEmails(persons) {
    const seenEmails = new Set();
    // Sort by id ascending so we keep the smallest id first
    persons.sort((a, b) => a.id - b.id);
    
    return persons.filter(person => {
        if (seenEmails.has(person.email)) {
            return false; // Duplicate found, delete/exclude it
        }
        seenEmails.add(person.email);
        return true; // Keep unique email
    });
}

// --- Test Case ---
const personTable = [
    { id: 1, email: 'john@example.com' },
    { id: 2, email: 'bob@example.com' },
    { id: 3, email: 'john@example.com' }
];

console.log("Before:", personTable);
const updatedTable = deleteDuplicateEmails(personTable);
console.log("After:", updatedTable);
// Output will keep IDs 1 and 2, removing duplicate 'john@example.com' with ID 3.
