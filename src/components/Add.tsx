'use client';

import { useState } from 'react';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useCartStore from '@/hooks/zustand/useCartStore';

type ProductOption = {
  name: string;
  value: string;
};

const Add = ({
  product_id,
  name,
  desc,
  price,
  stock_status,
  image_src,
  product_options,
}: {
  product_id: number;
  name: string;
  desc: string;
  price: string;
  stock_status: string;
  image_src: string;
  product_options: ProductOption[];
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore((state) => state);

  //WhatsApp
  const WhatsAppNumber = 2348033085416;
  let whatsAppMsg = '';
  const productName = name.replace(/ /g, '+');
  whatsAppMsg = 'Hi%2C+I%27m+interested+in+your+' + productName;

  // TEMPORARY
  const stockNumber = 4;

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product_id,
      name: name,
      desc: desc,
      price: Number(price),
      stock_status: stock_status,
      image: image_src,
      product_options: product_options,
      quantity: quantity,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex">
        <div className="mr-5 flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity('d')}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity('i')}
              disabled={quantity === stockNumber}
            >
              +
            </button>
          </div>
        </div>
        <button onClick={() => handleAddToCart()} className="add-cart-btn">
          Add to Cart
        </button>
      </div>

      <a
        href={`https://wa.me/${WhatsAppNumber}?text=${whatsAppMsg}`}
        target="_blank"
        className="whatsapp-button"
      >
        <div>
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          <p>Order on WhatsApp</p>
        </div>
      </a>
    </div>
  );
};

export default Add;
