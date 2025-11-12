'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { CartItem } from '@/types/checkout';
import useCartStore from '@/hooks/zustand/useCartStore';
import { getTempState } from '@/components/archive/cart/Checkout';

function PaySuccess() {
  const { items: cartItems, clearCart } = useCartStore((state) => state);
  const [lineItems, setLineItems] = useState<CartItem[]>([]);

  const order = getTempState();
  const router = useRouter();

  useEffect(() => {
    setLineItems(cartItems);
    clearCart();
    if (!order) {
      router.replace('/shop');
    }
  }, [order, router]);

  if (!order) return null;

  const today = new Date();
  const formatted_date = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const reference = order.meta_data.find(
    (item: { key: string }) => item.key === 'reference',
  );

  const total = lineItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="confirmation-page-wrapper">
      <div className="header">
        <h1 className="title">
          Thank you{' '}
          <span className="capitalize">{order.billing.first_name}</span>, your
          order has been received.
        </h1>
        <p className="oreder-no">
          Order No.{' '}
          <span className="uppercase">{reference && reference.value}</span>
        </p>
      </div>
      <div className="billing">
        <div className="left">
          <p className="fullname capitalize">
            {order.billing.first_name} {order.billing.last_name}
          </p>
          <p className="email bill_p">{order.billing.email}</p>
          <p className="address bill_p capitalize">{order.billing.address_1}</p>
          <p className="state bill_p capitalize">
            {order.billing.city}, {order.billing.state} {order.billing.postcode}
          </p>
          <p className="country bill_p capitalize">{order.billing.country}</p>
        </div>
        <div className="right">
          <h3 className="date">{formatted_date}</h3>
        </div>
      </div>
      <div className="summary">
        <div className="cart-items">
          {lineItems.length > 0 &&
            lineItems.map((item) => (
              <div className="cart-item" key={item.cart_id}>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                ></div>
                <div className="detail-wrap">
                  <div className="left">
                    <h3 className="name">{item.name}</h3>
                    {/* <h2 className="desc">{item.desc}</h2> */}
                    <div className="options">
                      {item.product_options.length > 0 &&
                        item.product_options.map((option) => (
                          <div key={option.value} className="item">
                            <span>{option.value}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="right">
                    <h1 className="price">
                      {item.quantity && item.quantity > 1 && (
                        <span className="text-xs text-green-500">
                          {item.quantity} x{' '}
                        </span>
                      )}
                      ${item.price}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="total-items">
          <div className="total-item">
            <h3>Subtotal</h3>
            {total !== null && <h3>${total}</h3>}
          </div>
          <div className="total-item">
            <h3>Shipping</h3>
            <h3>${order.shipping_lines[0].total}</h3>
          </div>
          <div className="total-item total">
            <h3>Total</h3>
            {total !== null && (
              <h3>${Number(order.shipping_lines[0].total) + total}</h3>
            )}
          </div>
        </div>
        <div className="action-butttons">
          <a href="/shop">
            <div className="btn">
              <span>Return to shop</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaySuccess;
