import { Cancel } from '@/components/Icons';
import { Minus, Plus, X } from 'lucide-react';
import Image from 'next/image';

interface OrderItemProps {
  item: {
    cart_id: string;
    id: number;
    name: string;
    desc: string;
    price: number;
    image: string;
    product_options: { name: string; value: string }[];
    quantity: number;
  };
  onUpdateQuantity: (cart_id: string, type: 'increment' | 'decrement') => void;
  onRemove: (cart_id: string) => void;
}

export function OrderItem({
  item,
  onUpdateQuantity,
  onRemove,
}: OrderItemProps) {
  const collection =
    item.product_options.find((opt) => opt.name === 'Collection')?.value || '';
  const year =
    item.product_options.find((opt) => opt.name === 'Year')?.value || '';
  const gender =
    item.product_options.find((opt) => opt.name === 'Gender')?.value || '';
  const lineTotal = item.price * item.quantity;

  return (
    <>
      <div className="flex justify-end lg:hidden">
        <button
          onClick={() => onRemove(item.cart_id)}
          className="-mt-1 text-gray-900 hover:text-gray-600 "
        >
          <Cancel />
        </button>
      </div>

      <div className="flex flex-col gap-3 pb-4 xl:flex-row">
        <div className="relative">
          <Image
            src={item.image}
            alt={item.name}
            className="h-[614px] w-full object-cover lg:h-[333px] 2xl:w-[327px]"
            height={600}
            width={600}
          />
        </div>

        <div className="flex flex-1 flex-col justify-center px-4  py-1">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start justify-between ">
              <div className="text-base font-bold text-[#000000] transition-colors duration-500 group-hover:text-gray-300 md:text-[20px]">
                <h3>{item.desc}</h3>
                <h3>{item.name}</h3>
              </div>

              <p className=" text-[20px] text-gray-500 transition-colors duration-500 group-hover:text-white lg:hidden ">
                ${lineTotal.toFixed(2)}
              </p>
              <button
                onClick={() => onRemove(item.cart_id)}
                className="-mt-1 hidden text-gray-900 hover:text-gray-600 lg:block"
              >
                <X size={20} />
              </button>
            </div>

            {collection && (
              <p className="text-sm text-[#212529] transition-colors duration-500 group-hover:text-white md:text-base">
                {collection}
              </p>
            )}
            {gender && (
              <p className="text-sm text-[#212529] transition-colors duration-500 group-hover:text-white md:text-base">
                <span className="text-[#212529]">Item size:</span> {gender}
              </p>
            )}

            {year && (
              <p className="text-sm text-[#212529] transition-colors duration-500 group-hover:text-white md:text-base">
                <span>Year:</span> {year}
              </p>
            )}

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center rounded ">
                <button
                  onClick={() => onUpdateQuantity(item.cart_id, 'decrement')}
                  className="size-[37px] flex items-center justify-center border border-[#212529] px-2 py-0.5 hover:bg-gray-50"
                >
                  <Minus size={12} />
                </button>
                <span className="min-w-[40px]  px-3 text-center text-[20px]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.cart_id, 'increment')}
                  className="size-[37px] flex  items-center justify-center border border-[#212529] px-2 py-0.5 hover:bg-gray-50"
                >
                  <Plus size={12} />
                </button>
              </div>

              <p className=" text-[20px] text-gray-500 transition-colors duration-500 group-hover:text-white max-lg:hidden ">
                ${lineTotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
