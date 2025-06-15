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
      <div className="page-container checkout-container">
        <div className="page-inner-div checkout-inner-div">
            <CheckoutForm />
        </div>
      </div>
    )
}
