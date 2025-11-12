'use client';

import dynamic from 'next/dynamic';

const PayFailed = dynamic(() => import('@/components/PayFailed'), {
  ssr: false,
});

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
