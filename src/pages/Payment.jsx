import React from "react";

const Payment = () => {
  const handlePayment = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

      // 1️⃣ Create Order from Backend
      const response = await fetch(`${API_URL}/api/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500, currency: "INR" }),
      });

      const data = await response.json();
      if (!data.success) throw new Error("Payment failed");

      // 2️⃣ Load Razorpay Script if Not Already Loaded
      if (!window.Razorpay) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        await new Promise((resolve) => (script.onload = resolve));
      }

      // 3️⃣ Open Razorpay Checkout
      const options = {
        key: RAZORPAY_KEY,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Crowdfunding Platform",
        description: "Support a Campaign",
        order_id: data.order.id,
        handler: async (paymentResponse) => {
          // 4️⃣ Verify Payment on Backend
          const verifyResponse = await fetch(`${API_URL}/api/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentResponse),
          });

          const verifyData = await verifyResponse.json();
          if (verifyData.success) {
            alert("🎉 Payment Successful! Thank you for your support.");
          } else {
            alert("❌ Payment Verification Failed.");
          }
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Payment failed, please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Support This Campaign</h1>
      <button onClick={handlePayment} style={{ padding: "10px 20px", fontSize: "18px" }}>
        Pay ₹500
      </button>
    </div>
  );
};

export default Payment;
