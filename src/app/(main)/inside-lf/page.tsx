import React from 'react';

import { Metadata } from 'next';

import { getPosts } from '@/actions/wordpress/posts';
import EditorialList from '@/components/EditorialList';

export const metadata: Metadata = {
  title: 'Lisa Folawiyo Editorials | Fashion Stories & Inspiration',
  description:
    'Explore Lisa Folawiyo’s editorial stories, showcasing craftsmanship, creativity, and the art of fashion.',
};

export default async function Archive() {
  const post_data = await getPosts('', '', parseInt('1', 10), 10);
  const posts = post_data.posts;
  return (
    <div className="page-container">
      <div className="page-inner-div ">
        <div className="archive-container">
          {posts.length > 0 && <EditorialList posts={posts} />}
        </div>
      </div>
    </div>
  );
}
