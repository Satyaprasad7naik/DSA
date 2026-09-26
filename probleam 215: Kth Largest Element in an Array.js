/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Approach 1: Sorting (Simple & Clean)
// Time Complexity: O(N log N)
// Space Complexity: O(1) or O(N) depending on the sorting engine
function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a); // Sort in descending order
    return nums[k - 1];         // Return the (k-1)th index element
}

// Approach 2: Min-Heap approach (Optimal for large datasets)
// Time Complexity: O(N log k)
// Space Complexity: O(k)
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.upHeap(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.downHeap(0);
        return top;
    }

    upHeap(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parent]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            } else {
                break;
            }
        }
    }

    downHeap(index) {
        let length = this.heap.size ? this.heap.length : this.heap.length;
        while (2 * index + 1 < this.heap.length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

function findKthLargestHeap(nums, k) {
    const minHeap = new MinHeap();
    for (const num of nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    return minHeap.peek();
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
