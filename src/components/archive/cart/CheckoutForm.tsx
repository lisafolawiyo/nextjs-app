'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export const CHECKOUT_SCHEMA = z.object({
  email: z.email('Please enter a valid email address'),
  signUpForPromotions: z.boolean().optional(),
  fullName: z.string().min(1, 'Full name is required'),
  country: z.string().min(1, 'Please select a country'),
  city: z.string().min(1, 'Please select a city'),
  address: z.string().min(1, 'Address is required'),
  comments: z.string().optional(),
});

export type CHECKOUT_SCHEMA_TYPE = z.infer<typeof CHECKOUT_SCHEMA>;

interface CheckoutFormProps {
  onSubmit: (data: CHECKOUT_SCHEMA_TYPE) => void;
  total?: number;
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const form = useForm<CHECKOUT_SCHEMA_TYPE>({
    resolver: zodResolver(CHECKOUT_SCHEMA),
    defaultValues: {
      email: '',
      signUpForPromotions: false,
      fullName: '',
      country: '',
      city: '',
      address: '',
      comments: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h2 className="mb-3 text-[20px] font-normal tracking-wide text-gray-800 md:text-[40px]">
            CONTACT
          </h2>
          <div className="space-y-3">
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
              name="signUpForPromotions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center  space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-5 w-5 rounded-none border-[#212529] data-[state=checked]:bg-black"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="cursor-pointer text-base font-normal text-gray-600 md:text-[18px]">
                      Sign me up for promotions
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-[20px] font-normal tracking-wide text-gray-800 md:text-[40px]">
            DELIVERY
          </h2>
          <div className="space-y-4 md:space-y-8">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90  focus:border-gray-400 focus:outline-none"
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
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="!h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90  focus:border-gray-400 focus:outline-none">
                        <SelectValue placeholder="Country/Region" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="!h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90  focus:border-gray-400 focus:outline-none">
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="houston">Houston</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Address"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90  focus:border-gray-400 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Comments"
                      className="h-[53px] w-full rounded-none border border-[#212529] px-3 py-2.5 text-[13px] placeholder:text-[#212529]/90  focus:border-gray-400 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="h-[53px] w-full rounded-none bg-black py-3.5 font-normal  text-white transition-colors hover:bg-gray-900"
        >
          CHECK OUT
        </Button>

        <p className="text-center text-sm  text-[#212529]  md:text-[18px]">
          Shipping is calculated at checkout
        </p>
      </form>
    </Form>
  );
}
