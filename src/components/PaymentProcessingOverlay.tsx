"use client";
import React from "react";

const PaymentProcessingOverlay = ({isOverlayOpen}: {isOverlayOpen: boolean}) => {
  return (
    <div 
    className={`payment-overlay fixed inset-0 z-50 flex items-center justify-center ${isOverlayOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-lg font-medium">Processing payment...</p>
      </div>
    </div>
  );
};

export default PaymentProcessingOverlay;