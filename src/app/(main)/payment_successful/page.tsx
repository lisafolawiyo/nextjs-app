import PaySuccess from '@/components/PaySuccess';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};


function Successful() {
  
  return (
    <div className="page-container confirmation-container">
      <div className="page-inner-div confirmation-inner-div">
        <PaySuccess />
      </div>
    </div>
  )
}

export default Successful