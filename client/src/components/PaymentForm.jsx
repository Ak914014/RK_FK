import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { motion } from "framer-motion";
import { FaCreditCard, FaCheckCircle } from "react-icons/fa";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ plan, amount, onSuccess }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.post("/api/payment/create-payment-intent", {
      plan: plan.title,
      amount: calculateTotalAmount(plan),
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      setClientSecret(res.data.clientSecret);
    })
    .catch((err) => {
      console.error("Error creating payment intent:", err);
      setError("Failed to initialize payment. Please try again.");
    });
  }, [plan]);

  const calculateTotalAmount = (selectedPlan) => {
    return parseFloat(selectedPlan.price.replace("from $", "").replace("$", ""));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const stripe = await stripePromise;

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: Elements.getElement(CardElement),
      },
    });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    // Payment succeeded
    setSucceeded(true);
    setProcessing(false);
    setError(null);

    // Save payment to database
    try {
      await axios.post("/api/payment/confirm-payment", {
        paymentIntentId: paymentIntent.id,
        plan: plan.title,
        amount: calculateTotalAmount(plan),
        user: JSON.parse(localStorage.getItem("userInfo"))._id,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      onSuccess();
    } catch (err) {
      console.error("Error saving payment:", err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      {succeeded ? (
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
          <p className="text-gray-600">Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Pay for {plan.title} - ${calculateTotalAmount(plan)}
          </h3>
          
          <div className="mb-6">
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          
          {error && (
            <div className="text-red-500 mb-4 text-sm">{error}</div>
          )}
          
          <button
            type="submit"
            disabled={processing || !clientSecret}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {processing ? "Processing..." : `Pay $${calculateTotalAmount(plan)}`}
          </button>
        </form>
      )}
    </motion.div>
  );
};

const PaymentWrapper = ({ plan, onSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm plan={plan} onSuccess={onSuccess} />
    </Elements>
  );
};

export default PaymentWrapper;