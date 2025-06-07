"use client";

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
  onSuccess: (ref: any) => void;
  onClose: () => void;
  onError: (error: any) => void
};

export default function PaystackWrapper({
  config,
  onSuccess,
  onClose,
  onError,
}: PaystackProps) {
  let initializePayment = usePaystackPayment(config);

  const hasInitialized = useRef(false); // 🔒 Guard against double init

  useEffect(() => {
    if (!hasInitialized.current) {
      try {
        initializePayment({ onSuccess, onClose });
      } catch (error) {
        onError(error);
      }
      hasInitialized.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
