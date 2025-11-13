export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  modified: string;
  content: {
    rendered: string;
  };
  type: string;
  status: string;
  excerpt: {
    rendered: string;
  };
  author: number;
  categories: number[];
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
};
