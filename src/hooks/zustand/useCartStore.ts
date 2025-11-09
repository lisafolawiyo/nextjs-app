import { create } from 'zustand';
import toast from 'react-hot-toast';
import { persist } from 'zustand/middleware';

type ProductOptions = {
  name: string;
  value: string;
};

interface CartItem {
  cart_id: string;
  id: number;
  name: string;
  desc: string;
  price: number;
  stock_status: string;
  image: string;
  product_options: ProductOptions[];
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'cart_id'>) => void;
  removeFromCart: (cart_id: string) => void;
  updateQty: (type: 'increment' | 'decrement', cart_id: string) => void;
  cartTotal: () => number;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const isSameOptions = (
          opts1: ProductOptions[],
          opts2: ProductOptions[],
        ) => {
          if (opts1.length !== opts2.length) return false;
          return opts1.every((opt1) =>
            opts2.some(
              (opt2) => opt1.name === opt2.name && opt1.value === opt2.value,
            ),
          );
        };

        const existingIndex = get().items.findIndex(
          (item) =>
            item.id === product.id &&
            isSameOptions(item.product_options, product.product_options),
        );

        if (existingIndex !== -1) {
          const currentItems = [...get().items];
          const existingItem = currentItems[existingIndex];

          currentItems[existingIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + product.quantity,
          };
          set({ items: currentItems });
          toast.success('Product quantity updated');
        } else {
          set({
            items: [
              ...get().items,
              {
                cart_id: crypto.randomUUID(),
                quantity: product.quantity || 1,
                id: product.id,
                name: product.name,
                desc: product.desc,
                price: product.price,
                stock_status: product.stock_status,
                image: product.image,
                product_options: product.product_options,
              },
            ],
          });
          toast.success('Product added successfully');
        }
      },
      removeFromCart: (cart_id) => {
        set({
          items: get().items.filter((item) => item.cart_id !== cart_id),
        });
        toast.success('Item removed');
      },
      updateQty: (type, cart_id) => {
        const item = get().items.find((item) => item.cart_id === cart_id);
        if (!item) return;

        if (item.quantity === 1 && type === 'decrement') {
          get().removeFromCart(cart_id);
        } else {
          item.quantity =
            type === 'decrement' ? item.quantity - 1 : item.quantity + 1;
          set({
            items: [...get().items],
          });
        }
      },
      cartTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
);

export default useCartStore;
