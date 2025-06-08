import crypto from 'crypto';

type OAuthParams = {
  oauth_consumer_key: string;
  oauth_nonce: string;
  oauth_signature_method: 'HMAC-SHA1';
  oauth_timestamp: number;
  oauth_version: '1.0';
  oauth_signature?: string;
  [key: string]: string | number | undefined;
};

// ✅ Function to generate OAuth 1.0 signature using native crypto
export const generateOAuthSignature = (
  url: string,
  method: 'GET' | 'POST' = 'GET',
  params: Record<string, string | number> = {}
): OAuthParams => {
  const nonce = Math.random().toString(36).substring(2);
  const timestamp = Math.floor(Date.now() / 1000);

  const oauthParams: OAuthParams = {
    oauth_consumer_key: String(process.env.WC_CONSUMER_KEY),
    oauth_nonce: nonce,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_version: '1.0',
  };

  const allParams = { ...oauthParams, ...params };

  const paramString = Object.keys(allParams)
    .sort()
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(allParams[key] as string)}`)
    .join('&');

  const baseUrl = url.split('?')[0];
  const baseString = `${method.toUpperCase()}&${encodeURIComponent(baseUrl)}&${encodeURIComponent(paramString)}`;

  const signingKey = `${encodeURIComponent(String(process.env.WC_CONSUMER_SECRET))}&`;

  const signature = crypto
    .createHmac('sha1', signingKey)
    .update(baseString)
    .digest('base64');

  return {
    ...oauthParams,
    oauth_signature: encodeURIComponent(signature),
  };
};




// export const getProduct = async (slug: string) => {
//   const products = await getProducts()
//   return products.find((p: Product) => p.slug === slug);
// }

// params: {
//   ...oauthParams,
//   customer: userid
// }

// const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

// export const getProducts = async () => {

//   try {
//     const response = await fetch(baseUrl, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Basic ${auth}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Failed to fetch products');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error('WooCommerce API error:', error.message);
//       throw error;
//     } else {
//       console.error('Unexpected error', error);
//       throw new Error('An unexpected error occurred');
//     }
//   }
// };
