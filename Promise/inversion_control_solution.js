const cart = ["pants", "shoes", "Phone"];

function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (cart.length > 0) {
            const orderId = "12345"; // Simulating an order ID
            resolve(orderId); // Resolve with orderId
        } else {
            reject("Cart is empty"); // Reject if cart is empty
        }
    });
}

function proceedToPayment(orderId) {
    console.log(`Proceeding to payment for order ID: ${orderId}`);
}

// Create the order and handle the promise
createOrder(cart)
    .then(function (orderId) {
        proceedToPayment(orderId);
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
