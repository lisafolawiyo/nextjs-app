"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCartStore from '@/hooks/zustand/useCartStore';
import { CartItem } from '@/types/checkout';
import { getTempState } from '@/components/CheckoutForm';


function PaySuccess() {
  const { items: cartItems, cartTotal, clearCart } = useCartStore((state) => state);
  const [totalCart, setTotalCart] = useState<number | null>(null);
  const [lineItems, setLineItems] = useState<CartItem[]>([]);
  const order = getTempState();
  const router = useRouter();

  useEffect(() => {
    const value = cartTotal(); // safe to call on client
    setTotalCart(value);
    setLineItems(cartItems);
      // clear cart in store
    clearCart();
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

  const reference = order.meta_data.find((item: { key: string; }) => item.key === "reference");
  
  return (
    <div className='confirmation-page-wrapper'>
      <div className='header'>
        <h1 className='title'>
          Thank you <span className='capitalize'>{order.billing.first_name}</span>, your order has been received.
        </h1>
        <p className='oreder-no'>Order No. <span className='uppercase'>{reference && reference.value}</span></p>
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
        <div className='cart-items'>
          {lineItems.length > 0 && lineItems.map((item) => (
            <div className='cart-item' key={item.cart_id}>
                <div 
                className='image'
                style={{
                    backgroundImage: `url('${item.image}')`
                }}></div>
                <div className='detail-wrap'>
                    <div className='left'>
                        <h3 className='name'>{item.name}</h3>
                        <h2 className='desc'>{item.desc}</h2>
                        <div className='options'>
                            {item.product_options.length > 0 && item.product_options.map((option) => (
                                <div 
                                key={option.value}
                                className='item'><span>{option.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='right'>
                        <h1 className='price'>
                            {item.quantity && item.quantity > 1 && (
                                <span className="text-xs text-green-500">
                                    {item.quantity} x{" "}
                                </span>
                            )}
                            ${item.price}
                        </h1>
                    </div>
                </div>
            </div>
          ))}
        </div>
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
        <div className='action-butttons'>
          <a href='/shop'>
            <div className='btn'><span>Return to shop</span></div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PaySuccess