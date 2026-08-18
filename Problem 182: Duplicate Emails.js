/**
 * @param {Object[]} person - Array of objects representing the Person table
 * @return {string[]} - Array of duplicate emails
 */
function duplicateEmails(person) {
    const emailCount = {};
    const duplicates = [];

    // Count the frequency of each email
    for (const p of person) {
        emailCount[p.email] = (emailCount[p.email] || 0) + 1;
    }

    // Find emails with a count greater than 1
    for (const email in emailCount) {
        if (emailCount[email] > 1) {
            duplicates.push(email);
        }
    }

    return duplicates;
}

// --- Test Case ---
const personTable = [
    { id: 1, email: "a@b.com" },
    { id: 2, email: "c@d.com" },
    { id: 3, email: "a@b.com" }
];

console.log(duplicateEmails(personTable)); 
// Output: [ 'a@b.com' ]
