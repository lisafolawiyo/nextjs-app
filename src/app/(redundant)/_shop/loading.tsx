'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
        <p className="text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
