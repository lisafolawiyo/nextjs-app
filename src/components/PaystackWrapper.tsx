'use client';

import { useEffect, useRef } from 'react';

import { usePaystackPayment } from 'react-paystack';

import { PaystackError, PaystackSuccessResponse } from '@/types/checkout';

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
  onError: (error: PaystackError) => void;
};

export default function PaystackWrapper({
  config,
  onSuccess,
  onClose,
  onError,
}: PaystackProps) {
  const initializePayment = usePaystackPayment(config);

  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      try {
        initializePayment({ onSuccess, onClose });
      } catch (error) {
        onError(error as PaystackError);
      }
      hasInitialized.current = true;
    }
  }, []);

  return null;
}
