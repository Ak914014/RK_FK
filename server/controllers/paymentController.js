import Stripe from "stripe";
import Payment from "../models/paymentModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const { plan, amount, wordCount, rushOrder, additionalServices } = req.body;

    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, 
      currency: "usd",
      metadata: {
        plan,
        wordCount,
        rushOrder: rushOrder || false,
        additionalServices: additionalServices?.join(",") || "",
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { paymentIntentId, plan, amount, user } = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ error: "Payment not succeeded" });
    }

    const payment = new Payment({
      user,
      plan,
      amount,
      status: "completed",
      paymentMethod: paymentIntent.payment_method_types[0],
      transactionId: paymentIntent.id,
      ...req.body,
    });

    await payment.save();

    res.status(201).json({
      success: true,
      payment,
    });
  } catch (error) {
    console.error("Error confirming payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payment history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};