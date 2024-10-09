document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const contestantId = document.getElementById("contestantId").value; // Get contestant ID

    const handler = PaystackPop.setup({
        key: 'pk_test_128cded5364b4cda51374c6f64d779d9c38590b5', // Replace with your Paystack public key
        email: email,
        amount: amount * 100, // Amount in kobo
        currency: "NGN",
        metadata: {
            contestant_id: contestantId // Include contestant ID in metadata
        },
        callback: function(response) {
            // Payment successful
            alert('Payment successful! Reference: ' + response.reference + 
                  '\nContestant ID: ' + contestantId);
        },
        onClose: function() {
            alert('Transaction was not completed, window closed.');
        }
    });
    handler.openIframe();
});
