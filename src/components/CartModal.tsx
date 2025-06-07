"use client";

import useCartStore from "@/hooks/zustand/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const CartModal = () => {
  const {
    items: cartItems,
    removeFromCart: removeFromCart,
    cartTotal,
  } = useCartStore((state) => state);

  return (
    <div className="cart-modal">
      {cartItems.length === 0 ? (
          <p className="text-gray-500 text-sm text-center mt-2 mb-4">Cart is Empty</p>
        ) : (
          <>
          <div className="header">
            <h1>shopping bag</h1>
          </div>
          <div className='cart-items'>
              {cartItems.map((item) => (
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
                                      <span className="text-xs text-green-500 mr-1">
                                          {item.quantity} x{" "}
                                      </span>
                                  )}
                                  ${item.price}
                              </h1>
                              <div
                                className="remove-cart-btn"
                                // style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                                onClick={() => removeFromCart(item.cart_id)}
                              >
                                <span>remove</span>
                                {/* <FontAwesomeIcon icon={faTrashCan} className="remove-icon" /> */}
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
            <div className='total-wrap'>
              <div className='total-item'>
                  <h3>Subtotal</h3>
                  <h3>${cartTotal()}</h3>
              </div>
              <div className='total-item'>
                  <h3>Shipping</h3>
                  <h3>${0}</h3>
              </div>
              <div className='total-item total'>
                  <h3>Total</h3>
                  <h3>${cartTotal()}</h3>
              </div>
          </div>
          <div className='action-btn-wrap'>
            <a href='/checkout' className='btn-link'>
              <div className='btn'><span>Checkout</span></div>
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center mt-2 mb-4">
            Shipping is calculated at checkout.
          </p>

          </>
      )}
    </div>
  );
};

export default CartModal;
