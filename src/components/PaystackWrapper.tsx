"use client";

import { PaystackError, PaystackSuccessResponse } from "@/types/checkout";
import { useEffect, useRef } from "react";
import { usePaystackPayment } from "react-paystack";

type PaystackProps = {
  config: {
    reference: string;
    email: string;
    amount: number;
    currency: string;
    publicKey: string;
  };
  onSuccess: (ref: PaystackSuccessResponse) => void;
  onClose: () => void;
  onError: (error: PaystackError) => void
};

export default function PaystackWrapper({
  config,
  onSuccess,
  onClose,
  onError,
}: PaystackProps) {
  const initializePayment = usePaystackPayment(config);

  const hasInitialized = useRef(false); // 🔒 Guard against double init

  useEffect(() => {
    if (!hasInitialized.current) {
      try {
        initializePayment({ onSuccess, onClose });
      } catch (error) {
       onError(error as PaystackError);
      }
      hasInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
