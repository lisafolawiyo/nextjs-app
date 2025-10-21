import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Editorial from '@/components/Editorial';
import { getPostsByCategories, getSinglePost } from '@/actions/wordpress/posts';
import Skeleton from '@/components/Skeleton';
import RelatedPosts from '@/components/RelatedPosts';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Lisa Folawiyo Editorials | Fashion Stories & Inspiration',
  description:
    'Explore Lisa Folawiyo’s editorial stories, showcasing craftsmanship, creativity, and the art of fashion.',
};

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = await getSinglePost(slug);
  const relatedPosts = await getPostsByCategories(post.categories, 1, 10);
  if (!post) {
    return notFound();
  }
  // Remove the current post from the relatedPosts array by ID
  const filteredRelatedPosts = relatedPosts.posts.filter(
    (p: { id: number }) => p.id !== post.id,
  );

  return (
    <div className="page-container">
      <div className="page-inner-div">
        <div className="single-post-container">
          <Editorial post={post} />
          <Suspense fallback={<Skeleton />}>
            <RelatedPosts relatedPosts={filteredRelatedPosts} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Post;
