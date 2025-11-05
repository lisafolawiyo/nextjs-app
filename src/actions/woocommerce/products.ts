'use server';

import axios from 'axios';
import { generateOAuthSignature } from './woocommerce';

const API_URL = process.env.PROJECT_URL + 'wp-json/wc/v3';

const api = axios.create({ baseURL: API_URL });

// Get all Products from WooCommerce Store
export const getProducts = async (
  search: string,
  category: string,
  tag: string,
  page = 1,
  per_page = 10,
) => {
  try {
    const url = `${API_URL}/products`;
    const oauthParams = generateOAuthSignature(url, 'GET', {
      search: search,
      category: category,
      tag: tag,
      page: page,
      per_page: per_page,
      status: 'publish',
    });

    const response = await api.get('/products', {
      params: {
        ...oauthParams,
        search: search,
        category: category,
        tag: tag,
        page: page,
        per_page: per_page,
        status: 'publish',
      },
    });
    return {
      products: response.data,
      total_pages: parseInt(response.headers['x-wp-totalpages'], 10) || 1,
    };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

// Read Single Product Data by ID
export const getSingleProductData = async (slug: string) => {
  try {
    const url = `${API_URL}/products?slug=${slug}`;

    const oauthParams = generateOAuthSignature(url, 'GET', {
      slug: slug,
    });

    const response = await api.get('/products', {
      params: {
        ...oauthParams,
        slug: slug,
      },
    });

    return response.data[0];
  } catch (error) {
    console.error(error);
  }
};

// Get Related Products from WooCommerce Store
export const getRelatedProducts = async (
  include: number[],
  page = 1,
  per_page = 10,
) => {
  try {
    const includeParam = include.join(','); // Convert array to comma-separated string
    const url = `${API_URL}/products?include=${includeParam}`;
    const oauthParams = generateOAuthSignature(url, 'GET', {
      include: includeParam,
      page: page,
      per_page: per_page,
      status: 'publish',
    });

    const response = await api.get('/products', {
      params: {
        ...oauthParams,
        include: includeParam,
        page: page,
        per_page: per_page,
        status: 'publish',
      },
    });
    return {
      products: response.data,
      total_pages: parseInt(response.headers['x-wp-totalpages'], 10) || 1,
    };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export const getProductVariations = async (
  product_id: string,
  page = 1,
  per_page = 100,
) => {
  try {
    const endpoint = `/products/${product_id}/variations`;
    const url = `${API_URL}${endpoint}`;

    // Generate OAuth signature for the *variations* endpoint
    const oauthParams = generateOAuthSignature(url, 'GET', {
      page,
      per_page,
    });

    // Call the API correctly
    const response = await api.get(endpoint, {
      params: {
        ...oauthParams,
        page,
        per_page,
      },
    });

    return {
      variations: response.data,
      total_pages: parseInt(response.headers['x-wp-totalpages'], 10) || 1,
    };
  } catch (error) {
    console.error('Failed to fetch variations:', error);
    throw error;
  }
};

// Get all Product Categories from WooCommerce Store
export const getProductCategories = async (page = 1, per_page = 100) => {
  try {
    const endpoint = '/products/categories';
    const url = `${API_URL}${endpoint}`;

    const oauthParams = generateOAuthSignature(url, 'GET', {
      page,
      per_page,
    });

    const response = await api.get(endpoint, {
      params: {
        ...oauthParams,
        page,
        per_page,
      },
    });

    return {
      categories: response.data,
      total_pages: parseInt(response.headers['x-wp-totalpages'], 10) || 1,
    };
  } catch (error) {
    console.error('Failed to fetch product categories:', error);
    throw error;
  }
};
