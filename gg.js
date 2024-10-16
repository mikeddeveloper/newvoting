document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value * 100; // Convert to kobo

    // Initialize Paystack
    const handler = PaystackPop.setup({
        key:  "pk_live_d6a3fb58d7d73bd42f0e9b5c74f28cafc35dbe62()()", // Replace with your Paystack public key
        email: email,
        amount: amount,
        currency: "NGN",
        onClose: function() {
            alert('Transaction was not completed, window closed.');
        },
        callback: function(response) {
            alert('Payment successful! Transaction reference: ' + response.reference);
            // Optionally, send the transaction reference to your server for verification
        }
    });

    handler.openIframe();
});
