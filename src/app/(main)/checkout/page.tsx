import CheckoutForm from '@/components/CheckoutForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Checkout() {

    return (
        <>
            <CheckoutForm />
        </>
    )
}
