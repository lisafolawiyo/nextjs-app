export type ProductOptions = {
  name: string;
  value: string;
};
export type CartItem = {
  cart_id: string;
  id: number;
  name: string;
  desc: string;
  price: number;
  stock_status: string;
  image: string;
  product_options: ProductOptions[];
  quantity: number;
};

export type ShippingRate = {
  id: string;
  title: string;
  desc: string;
  delivery_time: string;
  fee: number;
};

export type ShippingLine = {
  method_id: string;
  method_title: string;
  total: string;
};

export type OrderItemMeta = {
  key: string;
  value: string;
};

export type MetaData = {
  key: string;
  value: string;
};

export type LineItem = {
  product_id: string;
  quantity: number;
  meta_data: OrderItemMeta[];
};

export type OrderData = {
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  billing: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    address_1: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  line_items: LineItem[];
  shipping_lines: ShippingLine[];
  meta_data: MetaData[];
};

export type PaystackSuccessResponse = {
  reference: string;
  transaction: string;
  status: string;
  message?: string;
};

export type PaystackError = {
  message: string;
  code?: string;
  [key: string]: unknown;
};

export type PaysStackConfig = {
  reference: string;
  email: string;
  amount: number;
  currency: string;
  publicKey: string;
};
