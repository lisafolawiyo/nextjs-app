"use server";

import axios from 'axios';
import { generateOAuthSignature } from "./woocommerce";
import { OrderData } from '@/types/checkout';

interface ProductOptions {
    name: string;
    value: string;
}
  
interface CartItem {
    id: number;
    name: string;
    price: number;
    stock_status: string;
    image: string;
    product_options: ProductOptions[];
    quantity: number;
}

export type Errors = {
    firstname?: string;
    lastname?: string;
    address?: string;
    city?: string;
    state?: string;
};

export type FormState = {
    errors: Partial<Record<string, string>>;
};
const API_URL = process.env.PROJECT_URL + 'wp-json/wc/v3';
const api = axios.create({
    baseURL: API_URL,
});


export async function createOrder(orderData: OrderData | null) {

    if (!orderData) {
        console.error("createOrder: orderData is null");
        throw new Error("Order data is required to create an order.");
    }

    console.log("Creating WooCommerce order with data:", orderData);

    // log order details in CMS
    const url = `${API_URL}/orders`

    const oauthParams = generateOAuthSignature(url, "POST");

    const oauthHeader = Object.keys(oauthParams)
        .map((key) => `${key}=${encodeURIComponent(String(oauthParams[key]))}`)
        .join(", ");

    try {
        const response = await api.post("/orders", orderData, {
            headers: {
            Authorization: `OAuth ${oauthHeader}`
            }
        })
        return response.data;

    } catch (error: any) {
    // Axios-specific error info
        if (error.response) {
                console.error("WooCommerce API error:", {
                status: error.response.status,
                data: error.response.data,
            });
        } else if (error.request) {
            console.error("No response received from WooCommerce:", error.request);
        } else {
            console.error("Order creation failed:", error.message);
        }

        throw new Error("Failed to create order. Please try again later.");
    }

}

  