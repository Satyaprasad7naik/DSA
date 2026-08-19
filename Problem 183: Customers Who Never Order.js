/**
 * @param {Object[]} customers - Array of customer objects {id, name}
 * @param {Object[]} orders - Array of order objects {id, customerId}
 * @return {Object[]} - Array of objects with the key 'Customers'
 */
var findCustomers = function(customers, orders) {
    // Step 1: Create a Set of all customerIds that have placed an order
    const orderedCustomerIds = new Set(orders.map(order => order.customerId));
    
    // Step 2: Filter the customers who are NOT in the Set
    const customersWithoutOrders = customers.filter(customer => !orderedCustomerIds.has(customer.id));
    
    // Step 3: Format the output to match the requested structure
    return customersWithoutOrders.map(customer => ({
        Customers: customer.name
    }));
};

// --- Test Cases ---
const customers = [
    { id: 1, name: 'Joe' },
    { id: 2, name: 'Henry' },
    { id: 3, name: 'Sam' },
    { id: 4, name: 'Max' }
];

const orders = [
    { id: 1, customerId: 3 },
    { id: 2, customerId: 1 }
];

console.log(findCustomers(customers, orders)); 
// Output: [ { Customers: 'Henry' }, { Customers: 'Max' } ]
