"use server";

import axios, { AxiosError } from 'axios';
import { generateOAuthSignature } from "./woocommerce";
import { OrderData } from '@/types/checkout';

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

    } catch (error) {
    // Axios-specific error info
        const err = error as AxiosError;
        if (err.response) {
            console.error("WooCommerce API error:", {
                status: err.response.status,
                data: err.response.data,
            });
        } else if (err.request) {
            console.error("No response received from WooCommerce:", err.request);
        } else {
            console.error("Order creation failed:", err.message);
        }

        throw new Error("Failed to create order. Please try again later.");
    }

}

  