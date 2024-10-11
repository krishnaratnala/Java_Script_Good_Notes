const cart = ["Phone", "Shoes", "Laptop"];

function create_order(cart) {
    return new Promise((resolve, reject) => {
        if (cart) {
            resolve("Order created successfully");
        } else {
            reject("Cart was empty");
        }
    });
}

function proceed_to_payment(OrderId) {
    return new Promise((resolve, reject) => {
        if (OrderId) {
            resolve("1234"); // Payment info ID
        } else {
            reject("505 error");
        }
    });
}

function order_summary(paymentinfo) {
    console.log("Payment info: ", paymentinfo); // Display payment info
    return paymentinfo; // Assuming we're summarizing the payment info
}

function update_Wallet(paymentinfo) {
    return new Promise((resolve, reject) => {
        if (paymentinfo) {
            console.log("Wallet updated with payment info:", paymentinfo);
            resolve("Wallet updated successfully");
        } else {
            reject("Failed to update wallet");
        }
    });
}
// Order processing flow
create_order(cart)
    .then(function (OrderId) {
        return proceed_to_payment(OrderId);
    })
    .then(function (paymentinfo) {
        return order_summary(paymentinfo);
    })
    .then(function (paymentinfo) {
        return update_Wallet(paymentinfo);
    })
    .then(function (walletUpdateStatus) {
        console.log(walletUpdateStatus); // Final success message
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
