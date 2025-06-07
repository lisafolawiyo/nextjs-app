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
    <>
      <PaySuccess />
    </>
  )
}

export default Successful