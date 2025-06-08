"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCartStore from '@/hooks/zustand/useCartStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { getTempState } from './CheckoutForm';

function PayFailed() {
  const { cartTotal } = useCartStore((state) => state);
  const [totalCart, setTotalCart] = useState<number | null>(null);
  const order = getTempState();
  const router = useRouter();

  useEffect(() => {
    const value = cartTotal(); // safe to call on client
    setTotalCart(value);
    // clear cart in store
  if (!order) {
    // Redirect to /shop if no order data found
    router.replace('/shop');
  }
  }, [order, router]);

  if (!order) return null; // Prevent rendering before redirect

  const today = new Date();
  const formatted_date = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='confirmation-page-wrapper'>
      <div className='header'>
        <FontAwesomeIcon icon={faTriangleExclamation} className="header-icon" />
        <h1 className='title'>
          Payment failed
        </h1>
        <p className='oreder-no'>Unfortunately your payment was rejected</p>
      </div>
      <div className='billing'>
        <div className='left'>
          <p className='fullname capitalize'>{order.billing.first_name} {order.billing.last_name}</p>
          <p className='email bill_p'>{order.billing.email}</p>
          <p className='address bill_p capitalize'>{order.billing.address_1}</p>
          <p className='state bill_p capitalize'>{order.billing.city}, {order.billing.state} {order.billing.postcode}</p>
          <p className='country bill_p capitalize'>{order.billing.country}</p>
        </div>
        <div className='right'>
          <h3 className='date'>{formatted_date}</h3>
        </div>
      </div>
      <div className='summary'>
        <div className='total-items'>
          <div className='total-item'>
              <h3>Subtotal</h3>
              {totalCart !== null && <h3>${totalCart}</h3>}
          </div>
          <div className='total-item'>
              <h3>Shipping</h3>
              <h3>{order.shipping_lines[0].total}</h3>
          </div>
          <div className='total-item total'>
              <h3>Total</h3>
              {totalCart !== null && <h3>${Number(order.shipping_lines[0].total) + totalCart}</h3>}
          </div>
        </div>
        <div className='failed-action-butttons'>
            <a href='/checkout' className='mr-3'>
                <div className='btn btn2'><span>Try again</span></div>
            </a>
            <a href='/shop'>
            <div className='btn'><span>Return to shop</span></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PayFailed