import PayFailed from '@/components/PayFailed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function PaymentFailed() {

  return (
    <>
    <PayFailed />
    </>
  )
}

export default PaymentFailed