'use client';

import dynamic from 'next/dynamic';

const PaySuccess = dynamic(() => import('@/components/PaySuccess'), {
  ssr: false,
});

function Successful() {
  return (
    <div className="page-container confirmation-container">
      <div className="page-inner-div confirmation-inner-div">
        <PaySuccess />
      </div>
    </div>
  );
}

export default Successful;
