/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
    // Split the version strings by the dot character
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    
    // Find the maximum length between the two arrays to ensure we check all revisions
    const maxLength = Math.max(v1.length, v2.length);
    
    for (let i = 0; i < maxLength; i++) {
        // Parse the revision number, default to 0 if we run out of bounds
        const num1 = i < v1.length ? parseInt(v1[i], 10) : 0;
        const num2 = i < v2.length ? parseInt(v2[i], 10) : 0;
        
        // Compare the current revision numbers
        if (num1 > num2) {
            return 1;
        }
        if (num1 < num2) {
            return -1;
        }
    }
    
    // If all checked revisions are equal, the versions are equal
    return 0;
}

// --- Example Test Cases ---
console.log(compareVersion("1.01", "1.001")); // Output: 0
console.log(compareVersion("1.0", "1.0.0"));  // Output: 0
console.log(compareVersion("0.1", "1.1"));    // Output: -1
