"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-red-50 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-gray-700 mb-6">
          We encountered an unexpected error. Please try again later or go back.
        </p>
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
