/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFreq = 0;
    this.keyMap = new Map(); // key -> {value, freq}
    this.freqMap = new Map(); // freq -> Set (keys in LRU order)
};

/** * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.keyMap.has(key)) return -1;

    const node = this.keyMap.get(key);
    this.updateFrequency(key, node);
    return node.value;
};

/** * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return;

    if (this.keyMap.has(key)) {
        const node = this.keyMap.get(key);
        node.value = value;
        this.updateFrequency(key, node);
    } else {
        if (this.size === this.capacity) {
            const minFreqSet = this.freqMap.get(this.minFreq);
            const keyToRemove = minFreqSet.values().next().value; // LRU in the minFreq set
            minFreqSet.delete(keyToRemove);
            this.keyMap.delete(keyToRemove);
            this.size--;
        }

        const newNode = { value, freq: 1 };
        this.keyMap.set(key, newNode);
        this.minFreq = 1;
        if (!this.freqMap.has(1)) this.freqMap.set(1, new Set());
        this.freqMap.get(1).add(key);
        this.size++;
    }
};

LFUCache.prototype.updateFrequency = function(key, node) {
    const oldFreq = node.freq;
    const newFreq = oldFreq + 1;
    node.freq = newFreq;

    this.freqMap.get(oldFreq).delete(key);
    if (this.freqMap.get(oldFreq).size === 0 && oldFreq === this.minFreq) {
        this.minFreq++;
    }

    if (!this.freqMap.has(newFreq)) this.freqMap.set(newFreq, new Set());
    this.freqMap.get(newFreq).add(key);
};
