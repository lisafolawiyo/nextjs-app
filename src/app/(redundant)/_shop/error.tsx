'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-red-50 px-4">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="mb-6 text-gray-700">
          We encountered an unexpected error. Please try again later or go back.
        </p>
        <button
          onClick={() => router.push('/')}
          className="rounded-md bg-red-500 px-6 py-2 text-white transition hover:bg-red-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
