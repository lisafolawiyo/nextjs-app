'use client';
import React from 'react';

import { Post } from '@/types/post';

const RelatedPosts = ({ relatedPosts }: { relatedPosts: Post[] }) => {
  const otherPostsWithFormattedDates = relatedPosts.map((post) => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  }));

  return (
    <div>
      <section className="editorial-list">
        <div className="section-wrapper editorial-list-wrapper">
          <div className="editorial-list-inner-wrap">
            {otherPostsWithFormattedDates.map((post) => {
              const featuredImage =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              return (
                <a
                  key={post.id}
                  href={`/post/${post.slug}`}
                  className="editorial-item"
                >
                  <div className="editorial-detail-wrap">
                    <p>{post.formattedDate}</p>
                    <h3>{post.title.rendered}</h3>
                  </div>
                  <div
                    className="editorial-thumbnail"
                    style={{
                      backgroundImage: `url('${featuredImage || '/post.png'}')`,
                    }}
                  ></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedPosts;
