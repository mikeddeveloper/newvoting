document.getElementById('payButton').addEventListener('click', function() {
    const email = document.getElementById('customerEmail').value;
    const amount = document.getElementById('paymentAmount').value;

    if (!email) {
        alert("Email is required to proceed with payment.");
        return;
    }

    if (!amount || amount < 100) {
        alert("Please enter a valid amount (minimum is ₦100).");
        return;
    }

    const handler = PaystackPop.setup({
        key: "pk_live_d6a3fb58d7d73bd42f0e9b5c74f28cafc35dbe62", // Replace with your actual Paystack public key
        email: email, // Customer's email
        amount: amount * 100, // Convert amount to kobo
        currency: "NGN", // Currency
        callback: function(response) {
            // Handle successful payment
            alert("Payment successful! Reference: " + response.reference);
            // You can redirect or show a success message
        },
        onClose: function() {
            // Handle payment window close
            alert('Payment window closed.');
        }
    });

    handler.openIframe();
});
