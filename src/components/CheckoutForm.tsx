"use client";

import { useRouter } from 'next/navigation';
import { createOrder } from '@/actions/woocommerce/orders';
import useCartStore from '@/hooks/zustand/useCartStore';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, Controller} from "react-hook-form";
import toast from "react-hot-toast";
import dynamic from 'next/dynamic';
import { OrderData, PaysStackConfig, PaystackError, PaystackSuccessResponse, ShippingRate } from '@/types/checkout';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getShippingRates } from '@/actions/checkout';
import { Countries } from '@/lib/country_data';
// import { AxiosError } from 'axios';



const PaystackWrapper = dynamic(() => import('@/components/PaystackWrapper'), {
  ssr: false,
});

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";


const checkoutSchema = z.object({
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
type FormFields = z.infer<typeof checkoutSchema>;

let tempState: OrderData; // 👈 In-memory state variable

export function setTempState(data: OrderData) {
  tempState = data;
}

export function getTempState() {
  return tempState;
}



export default function CheckoutForm() {
    const router = useRouter();
    const [totalCart, setTotalCart] = useState<number | null>(null);
    useEffect(() => {
        const value = cartTotal(); // safe to call on client
        setTotalCart(value);
    }, []);

    const [selectedShippingRate, setSelectedShippingRate] = useState<ShippingRate>(
        {
            id: "",
            title: "",
            desc: '',
            delivery_time: "",
            fee: 0
        }
    );
    const [shippingRates, setShippingRates] = useState<ShippingRate[]>([]);

    const handleShippingRateChange = (id: string) => {
        const rate = shippingRates.find((rate) => rate.id === id);
        if (rate) {
            setSelectedShippingRate(rate);
        } else {
        }
    };

    const handleCountryChange = async (country: string) => {
        try {
            setSelectedShippingRate({
                id: "",
                title: "",
                desc: '',
                delivery_time: "",
                fee: 0
            });
            // console.log("Selected country:", country);
            const rates = await getShippingRates(country);
            setShippingRates(rates); // <-- Assuming you have this state
        } catch (error) {
            console.log("Error: ", error);
            setShippingRates([]);
        }
    };


    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [paystackConfig, setPaystackConfig] = useState<PaysStackConfig | null>(null);
    const { items: cartItems, cartTotal } = useCartStore((state) => state);
    const {
        register,
        control,  // for custom components
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(checkoutSchema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (cartItems.length === 0 ) {
            setError("root", {message: "cart is empty",});
            return;
        }
        const userInfo = {
            payment_method: "paystack",
            payment_method_title: "Debit/Credit Cards",
            set_paid: false,
            billing: {
                first_name: data.firstname,
                last_name: data.lastname,
                address_1: data.address,
                city: data.city,
                state: data.state,
                postcode: data.postcode,
                country: data.country,
                email: data.email,
                phone: data.phone
            },
            shipping: {
                first_name: data.firstname,
                last_name: data.lastname,
                address_1: data.address,
                city: data.city,
                state: data.state,
                postcode: data.postcode,
                country: data.country,
            },
            shipping_lines: [
                {
                  method_id: selectedShippingRate.id,
                  method_title: selectedShippingRate.desc,
                  total: String(selectedShippingRate.fee)
                },
            ],
            meta_data: [
                {
                    key: "order_origin",
                    value: "web - NextJs App" // or "mobile", "app", etc.
                }
            ]
        }
        const lineItems = cartItems.map( (item) => ({
            product_id: String(item.id),
            quantity: item.quantity,
            name: item.desc,
            meta_data: item.product_options.length > 0
            ? item.product_options.map((opt) => ({
                key: opt.name,
                value: opt.value,
            }))
            : [],
        }));
        const _orderData: OrderData = {
            ...userInfo,
            line_items: lineItems,
        };
        setOrderData(_orderData);

        /// INITIATE PAYMENT
        const reference = `ref_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

        setPaystackConfig({
            reference,
            email: data.email,
            amount: (cartTotal() + selectedShippingRate.fee) * 100, // Paystack uses kobo
            currency: "NGN",
            publicKey,
        });
        
    };
    const onSuccess = (ref: PaystackSuccessResponse) => {
        toast.success("Payment successful");
        setPaystackConfig(null);
        // TODO: Call WooCommerce order API here
        if (orderData !== null) {
            const updatedOrderData: OrderData = {
                ...orderData,
                set_paid: true,
                  meta_data: [
                    ...(orderData.meta_data || []),
                    {
                        key: "reference",
                        value: ref.reference
                    }
                ]
            };
            createOrder(updatedOrderData);
            setTempState(updatedOrderData); // Save in memory
            router.push('/payment_successful');
        }
    };

    const onClose = () => {
        toast.error("Payment cancelled");
        setPaystackConfig(null);
    };
    
    const onError = (error: PaystackError) => {
        // const err = error as AxiosError;
        console.error("Payment failed to initialize:", error);
        toast.error('Payment failed');
        if (orderData !== null) {
            setTempState(orderData);
            router.push('/payment_failed');
        }

    };

    return (
        <div className='checkout-page'>
            <div className='header'>
                <h1>Checkout</h1>
            </div>
            <form 
            className='body-section'
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className='form-card'>
                    <div className='card-header'>
                        <h2>Shipping</h2>
                    </div>
                    <div className='form-wrapper'>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <h3 className='form-label'>First name*</h3>
                                <Input
                                {...register("firstname")}
                                type="text"
                                className=""
                                />
                                {errors.firstname && (
                                    <p className="error-msg">{errors.firstname.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <h3 className='form-label'>Last name*</h3>
                                <Input
                                {...register("lastname")}
                                type="text"
                                className=""
                                />
                                {errors.lastname && (
                                    <p className="error-msg">{errors.lastname.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='single-input-wrap'>
                            <h3 className='form-label'>Street number and name or P.O box*</h3>
                            <Input
                            {...register("address")}
                            type="text"
                            className=""
                            />
                            {errors.address && (
                                <p className="error-msg">{errors.address.message}</p>
                            )}
                        </div>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <h3 className='form-label'>City*</h3>
                                <Input
                                {...register("city")}
                                type="text"
                                className=""
                                />
                                {errors.city && (
                                    <p className="error-msg">{errors.city.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <h3 className='form-label'>Postal Code*</h3>
                                <Input
                                {...register("postcode")}
                                type="text"
                                className=""
                                />
                                {errors.postcode && (
                                    <p className="error-msg">{errors.postcode.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <h3 className='form-label'>State*</h3>
                                <Input
                                {...register("state")}
                                type="text"
                                className=""
                                />
                                {errors.state && (
                                    <p className="error-msg">{errors.state.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <h3 className='form-label'>Country*</h3>
                                    <Controller
                                    control={control}
                                    name="country"
                                    render={({ field }) => (
                                        <Select 
                                        onValueChange={async (value) => {
                                            field.onChange(value);
                                            await handleCountryChange(value);
                                        }}
                                        value={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a country" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Country</SelectLabel>
                                                    { Countries.map((item) => (
                                                        <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                    />
                                {errors.country && (
                                    <p className="error-msg">{errors.country.message}</p>
                                )}
                            </div>
                        </div>
                        <h1 className='form-subtitle-text'>Enter contact info</h1>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <h3 className='form-label'>Email*</h3>
                                <Input
                                {...register("email")}
                                type="email"
                                className=""
                                />
                                {errors.email && (
                                    <p className="error-msg">{errors.email.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <h3 className='form-label'>Mobile phone number*</h3>
                                <Input
                                {...register("phone")}
                                type="text"
                                className=""
                                />
                                {errors.phone && (
                                    <p className="error-msg">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <label htmlFor="terms">Please add me to the Lisafolawiyo email list</label>
                        </div>
                        <h1 className='form-subtitle-text'>Select a shipping method</h1>
                        {selectedShippingRate.id === "" &&
                            <p className="error-msg mb-3">Select a shipping option</p>
                        }
                        {shippingRates.length > 0 && (
                            <div className='shipping-options'>          
                                <RadioGroup
                                // value={selectedShippingRate.id}
                                onValueChange={handleShippingRateChange}
                                >
                                    {shippingRates.map((item) => (
                                        <div key={item.id} className='shipping-item'>
                                            <div className='left'>
                                                <div className='select-wrap'>
                                                    <RadioGroupItem value={item.id} id={item.id} className='mr-2'/>
                                                    <label htmlFor={item.id}>{item.title}</label>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className='right'>
                                                 <h3>${parseFloat(String(item.fee)).toFixed(2)}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </RadioGroup>         
                            </div>
                        )}
                    </div>

                </div>
                <div className='order-summary-card'>
                    {cartItems.length === 0 ? (
                        <div className="">Cart is Empty</div>
                    ) : (
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
                    )}
                    <div className='total-wrap'>
                        <div className='total-item'>
                            <h3>Subtotal</h3>
                           {totalCart !== null && <h3>${totalCart}</h3>}
                        </div>
                        <div className='total-item'>
                            <h3>Shipping</h3>
                            <h3>${selectedShippingRate.fee}</h3>
                        </div>
                        <div className='total-item total'>
                            <h3>Total</h3>
                            {totalCart !== null && <h3>${selectedShippingRate.fee + totalCart}</h3>}
                        </div>
                    </div>
                    <div className='pay-btn'>
                        {selectedShippingRate.id !== "" &&
                            <button 
                                className="checkout-submit-btn"
                                disabled={isSubmitting} 
                                type="submit">
                                    {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        }
                    </div>
                    <p className='pay-btn-text'>
                        By continuing, I confirm that I have read and accept
                        the Terms and Conditions, and the Privacy Policy.
                    </p>
                    {paystackConfig && (
                        <PaystackWrapper
                        config={paystackConfig}
                        onSuccess={onSuccess}
                        onClose={onClose}
                        onError={onError}
                        />
                    )}
                    {errors.root && <div className="root-error text-red-500">{errors.root.message}</div>}
                </div>
            </form>
        </div>
    )
}
