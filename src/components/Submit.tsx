'use client';
import { useFormStatus } from 'react-dom';

export const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="block w-full rounded bg-blue-500 p-2 text-white disabled:bg-gray-500"
      disabled={pending}
    >
      Submit
    </button>
  );
};
