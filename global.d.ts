/* eslint-disable @typescript-eslint/no-explicit-any */
type UnknownObject = Record<string, any>;
type VoidFunction = () => void;
type EmptyObject = Record<PropertyKey, never>;

type ProductOption = {
  name: string;
  value: string;
};

type ShippingRate = {
  id: string;
  title: string;
  desc: string;
  delivery_time: string;
  fee: number;
};
