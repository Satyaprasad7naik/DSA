// 87 - LRU Cache
// Design a Least Recently Used (LRU) cache with O(1) get and put operations.

class ListNode {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> ListNode

    // Dummy head and tail to avoid edge checks
    this.head = new ListNode(); // MRU side (right after head)
    this.tail = new ListNode(); // LRU side (right before tail)
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove node from its current position in the list
  _removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  // Insert node right after head (mark as most recently used)
  _addNodeToFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  // Move an existing node to the front (MRU)
  _moveToFront(node) {
    this._removeNode(node);
    this._addNodeToFront(node);
  }

  // Remove least recently used node (node before tail)
  _evictLRU() {
    const lru = this.tail.prev;
    if (lru === this.head) return; // nothing to evict
    this._removeNode(lru);
    this.map.delete(lru.key);
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._moveToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      // Update existing node and move to front
      const node = this.map.get(key);
      node.value = value;
      this._moveToFront(node);
      return;
    }

    // Create new node
    const newNode = new ListNode(key, value);
    this.map.set(key, newNode);
    this._addNodeToFront(newNode);

    // If over capacity, evict LRU
    if (this.map.size > this.capacity) {
      this._evictLRU();
    }
  }
}

// Simple tests / usage examples
function runTests() {
  const cache = new LRUCache(2);

  cache.put(1, 1);
  cache.put(2, 2);
  console.log(cache.get(1)); // 1

  cache.put(3, 3); // evicts key 2
  console.log(cache.get(2)); // -1

  cache.put(4, 4); // evicts key 1
  console.log(cache.get(1)); // -1
  console.log(cache.get(3)); // 3
  console.log(cache.get(4)); // 4
}

// Uncomment to run basic tests
// runTests();

module.exports = { LRUCache };
