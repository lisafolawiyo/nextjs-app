import axios from 'axios';
import { generateOAuthSignature } from '../woocommerce/woocommerce';



const API_URL = process.env.PROJECT_URL + 'wp-json/wp/v2';

const api = axios.create({
    baseURL: API_URL,
});

// ✅ Get all Products from WooCommerce Store
export const getPosts = async (
  search: string, 
  tag: string,
  page = 1, 
  per_page = 10
) => {
    try {
        const url = `${API_URL}/posts`;
        const oauthParams = generateOAuthSignature(url, "GET", {
            search: search,
            tag: tag,
            page: page,
            per_page: per_page,
        })
  
        const response = await api.get('/posts', {
            params: {
            ...oauthParams,
            search: search,
            tag: tag,
            page: page,
            per_page: per_page,
            _embed: true
            }
        });
      return {
        posts: response.data,
        total_pages: parseInt(response.headers['x-wp-totalpages'], 10) || 1
      };
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      throw error;
    }
};

  export const getSinglePost = async (slug: string) => {
  
    try{
      const url = `${API_URL}/posts?slug=${slug}`

      const oauthParams = generateOAuthSignature(url, "GET", {
        slug: slug
      })
  
      const response = await api.get("/posts", {
        params: {
          ...oauthParams,
          slug: slug
        }
      })
      return response.data[0];
    } catch(error){
      console.log(error)
    }
  }

  export const getPostsByCategories = async (
    categories: number[], 
    page = 1, 
    per_page = 10
  ) => {
      try {
        const includeParam = categories.join(','); // Convert array to comma-separated string
        const url = `${API_URL}/posts?categories=${includeParam}`;
        const oauthParams = generateOAuthSignature(url, "GET", {
          categories: includeParam,
          page: page,
          per_page: per_page
        })
    
        const response = await api.get('/posts', {
            params: {
            ...oauthParams,
            categories: includeParam,
            page: page,
            per_page: per_page,
            _embed: true
          }
        });
        return {
          posts: response.data,
          total_pages: parseInt(response.headers['x-wp-totalpages'], 10) || 1
        };
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        throw error;
      }
    };
    