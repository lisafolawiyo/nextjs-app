'use client';

import { getShippingRates } from '@/actions/checkout';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Countries } from '@/lib/country_data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type ShippingRate = {
  id: string;
  title: string;
  desc: string;
  delivery_time: string;
  fee: number;
};

export const CHECKOUT_SCHEMA = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is required and should be 10 digits'),
  address: z.string().min(3, 'Address is required'),
  city: z.string().min(3, 'City is required'),
  state: z.string().min(3, 'State is required'),
  postcode: z.string().min(3, 'Postal Code is required'),
  country: z.string().min(3, 'Country is required'),
});

export type CHECKOUT_SCHEMA_TYPE = z.infer<typeof CHECKOUT_SCHEMA>;

interface CheckoutFormProps {
  onSubmit: (data: CHECKOUT_SCHEMA_TYPE) => void;
  onShippingChange?: (fee: number) => void;
}

export function CheckoutForm({
  onSubmit,
  onShippingChange,
}: CheckoutFormProps) {
  const [shippingRates, setShippingRates] = useState<ShippingRate[]>([]);
  const [selectedShippingRate, setSelectedShippingRate] =
    useState<ShippingRate>({
      id: '',
      title: '',
      desc: '',
      delivery_time: '',
      fee: 0,
    });

  const form = useForm<CHECKOUT_SCHEMA_TYPE>({
    resolver: zodResolver(CHECKOUT_SCHEMA),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
    },
  });

  const handleCountryChange = async (country: string) => {
    try {
      setSelectedShippingRate({
        id: '',
        title: '',
        desc: '',
        delivery_time: '',
        fee: 0,
      });
      if (onShippingChange) {
        onShippingChange(0);
      }
      const rates = await getShippingRates(country);
      setShippingRates(rates);
    } catch (error) {
      console.error('Error: ', error);
      setShippingRates([]);
    }
  };

  const handleShippingRateChange = (id: string) => {
    const rate = shippingRates.find((rate) => rate.id === id);
    if (rate) {
      setSelectedShippingRate(rate);
      if (onShippingChange) {
        onShippingChange(rate.fee);
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h2 className="mb-3 text-[30px] font-normal tracking-wide text-gray-800 md:text-[40px]">
            CONTACT
          </h2>
          <div className="space-y-4 md:space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Mobile Phone Number"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-[30px] font-normal tracking-wide text-gray-800 md:text-[40px]">
            SHIPPING
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="First Name"
                        className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[11px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[11px]" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Street Number and Name or P.O Box"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={async (value) => {
                      field.onChange(value);
                      await handleCountryChange(value);
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="!h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        {Countries.map((item) => (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="State"
                        className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[11px]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="City"
                        className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[11px]" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Postal Code"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90 focus:border-gray-400 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {shippingRates.length > 0 && (
          <div>
            <h2 className="mb-3 text-[30px] font-normal tracking-wide text-gray-800 md:text-[40px]">
              SHIPPING METHOD
            </h2>
            {selectedShippingRate.id === '' && (
              <p className="mb-3 text-[11px] text-red-500">
                Please select a shipping option
              </p>
            )}
            <div className="space-y-3">
              <RadioGroup onValueChange={handleShippingRateChange}>
                {shippingRates.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border border-[#212529] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem
                        value={item.id}
                        id={item.id}
                        className="mt-1"
                      />
                      <div>
                        <label
                          htmlFor={item.id}
                          className="cursor-pointer text-[13px] font-medium text-[#212529] md:text-[15px]"
                        >
                          {item.title}
                        </label>
                        <p className="mt-1 text-[11px] text-gray-600 md:text-[13px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="text-[13px] font-medium text-[#212529] md:text-[15px]">
                      ${parseFloat(String(item.fee)).toFixed(2)}
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={shippingRates.length > 0 && selectedShippingRate.id === ''}
          className="h-[53px] w-full rounded-none bg-black py-3.5 font-normal text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          CHECK OUT
        </Button>

        <p className="text-center text-sm text-[#212529] md:text-[18px]">
          {shippingRates.length === 0
            ? 'Select a country to see shipping options'
            : 'By continuing, I confirm that I have read and accept the Terms and Conditions'}
        </p>
      </form>
    </Form>
  );
}
