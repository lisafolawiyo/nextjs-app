import { Metadata } from 'next';

import PayFailed from '@/components/PayFailed';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

function PaymentFailed() {
  return (
    <div className="page-container confirmation-container">
      <div className="page-inner-div confirmation-inner-div">
        <PayFailed />
      </div>
    </div>
  );
}

export default PaymentFailed;
