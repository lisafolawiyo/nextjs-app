'use client';

import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import toast from "react-hot-toast";

type PaystackConfig = {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
};

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

if (!publicKey) {
  throw new Error("Paystack public key is not defined in environment variables.");
}

const config: PaystackConfig = {
  reference: new Date().getTime().toString(),
  email: "nnoromduncan@gmail.com",
  amount: 20000 * 100, // in Kobo
  publicKey,
};

const onSuccess = (reference: any) => {
  console.log("Payment successful:", reference);
   toast.success('Payment successful');
};

const onClose = () => {
  console.log("Payment popup closed");
  toast.error('Payment cancelled');
};

const onError = (error: any) => {
  console.error("Payment failed to initialize:", error);
   toast.error('Payment failed');
};

const PaystackHook: React.FC = () => {
  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    try {
      initializePayment({
        onSuccess,
        onClose,
      });
    } catch (error) {
      onError(error);
    }
  };

  return (
    <div>
      <div onClick={handlePayment}>
        Paystack Hooks Implementation
      </div>
    </div>
  );
};

export default PaystackHook;
